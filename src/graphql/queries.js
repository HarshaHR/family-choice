/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      productName
      productCategory
      productSubCategory
      description
      image
      price
      availableQuantity
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        productName
        productCategory
        productSubCategory
        description
        image
        price
        availableQuantity
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
