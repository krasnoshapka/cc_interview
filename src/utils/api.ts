import {ApolloClient, InMemoryCache, createHttpLink, gql, useMutation, useQuery} from '@apollo/client';
import convertToSKU from "../utils/convertToSKU";
import React from "react";
import {PackageContext} from "../context/packageContext";

const link = createHttpLink({
  uri: 'https://staging.nxte.nl:5000/graphql',
  credentials: 'include',
  headers: {
    'x-store': '7'
  }
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});
export default client;

function convertItemsToPackages(items: []): IPackage[] {
  // TODO: implement better type validation here
  return items.map((item: any): IPackage => {
    return {
      packageId: parseInt(item.id),
      quantity: parseInt(item.quantity),
      amount: parseFloat(item.price)
    }
  });
}

export function useAddPackageToCartMutation() {
  const [addPackageToCart, {data, loading, error}] = useMutation(gql`
    mutation addPackageToCart($sku:SKU!, $quantity: Int!) {
      addPackageToCart(sku: $sku, quantity: $quantity, personalMessage: false) {
        items {
          id,
          quantity,
          price
        }
      }
    }
  `);

  const handleAddPackageToCart = async (p: IPackage) => {
    try {
      const {
        data: {
          addPackageToCart: { items }
        }
      } = await addPackageToCart({variables: {
        sku: convertToSKU(p.amount),
        quantity: p.quantity
      }});

      return convertItemsToPackages(items);
    } catch (error) {
      console.log(error.graphQLErrors);
    }
    return [];
  };

  return {addPackageToCart: handleAddPackageToCart, data, loading, error };
}

export function useCartQuery() {
  const {loadPackages} = React.useContext(PackageContext) as PackageContextType;
  const {data, loading, error} = useQuery(gql`
    query Cart {
      cart {
        id,
        items {
          id,
          quantity
          variant {
            id,
            sku
          },
          price 
        }
      }
    }
  `, {
    onCompleted: (data) => {
      loadPackages(convertItemsToPackages(data.cart.items));
    }
  });

  return {data, loading, error };
}

export function useUpdatePackageInCartMutation() {
  const [updatePackageInCart, {data, loading, error}] = useMutation(gql`
    mutation updatePackageInCart($id:ID!, $quantity: Int!) {
      updatePackageInCart(cartItemId: $id, quantity: $quantity, personalMessage: false) {
        items {
          id,
          quantity,
          price
        }
      }
    }
  `);

  const handleUpdatePackageInCart = async (p: IPackage) => {
    try {
      const {
        data: {
          updatePackageInCart: { items }
        }
      } = await updatePackageInCart({variables: {
        id: `${p.packageId}`,
        quantity: p.quantity
      }});

      return convertItemsToPackages(items);
    } catch (error) {
      console.log(error.graphQLErrors);
    }
    return [];
  };

  return {updatePackageInCart: handleUpdatePackageInCart, data, loading, error };
}

