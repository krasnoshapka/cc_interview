import { GraphQLClient, gql } from 'graphql-request';

const endpoint = 'https://staging.nxte.nl:5000/graphql';
const customHeaders = {"x-store":"7"};

const graphQLClient = new GraphQLClient(endpoint, {
  headers: customHeaders,
});

function convertToSKU(amount: number): string {
  let cents = `${amount}`.split('');
  while (cents.length < 3) {
    cents.unshift('0');
  }
  cents.push('0', '0');

  return 'LECA' + cents.join('');
}

export async function addPackageToCart(p: IPackage): Promise<number> {
  const mutation = gql`
    mutation addPackageToCart($sku:SKU!, $quantity: Int!, $personalMessage: Boolean!) {
      addPackageToCart(sku: $sku, quantity: $quantity, personalMessage: $personalMessage) {
        id,
        quantity
      }
    }
  `;

  const variables = {
    sku: convertToSKU(p.amount),
    quantity: p.quantity,
    personalMessage: false
  };
  const { data, errors, extensions, headers, status } = await graphQLClient.rawRequest(mutation, variables);

  console.log(JSON.stringify({ data, errors, extensions, headers, status }, undefined, 2));
  return 0;
}
