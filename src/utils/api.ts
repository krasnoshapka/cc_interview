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

export function useAddPackageToCartMutation() {
  const [addPackageToCart, {data, loading, error}] = useMutation(gql`
    mutation addPackageToCart($sku:SKU!, $quantity: Int!, $personalMessage: Boolean!) {
      addPackageToCart(sku: $sku, quantity: $quantity, personalMessage: $personalMessage) {
        id,
        quantity
      }
    }
  `);

  const handleAddPackageToCart = async (p: IPackage) => {
    try {
      const {
        data: {
          addPackageToCart: { id }
        }
      } = await addPackageToCart({variables: {
        sku: convertToSKU(p.amount),
        quantity: p.quantity,
        personalMessage: false
      }});

      return id;
    } catch (error) {
      console.log(error.graphQLErrors);
    }
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
      loadPackages(data.cart.items.map((item: any) => {
        // TODO: implement better type validation here
        return {
          packageId: item.id,
          quantity: item.quantity,
          amount: item.price
        }
      }));
    }
  });

  return {data, loading, error };
}
