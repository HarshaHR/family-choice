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
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      categoryName
      subCategory {
        items {
          id
          categoryID
          subCategoryName
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        categoryName
        subCategory {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSubCategory = /* GraphQL */ `
  query GetSubCategory($id: ID!) {
    getSubCategory(id: $id) {
      id
      categoryID
      subCategoryName
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSubCategories = /* GraphQL */ `
  query ListSubCategories(
    $filter: ModelSubCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        categoryID
        subCategoryName
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const subCategoriesByCategoryIDAndSubCategoryName = /* GraphQL */ `
  query SubCategoriesByCategoryIDAndSubCategoryName(
    $categoryID: ID!
    $subCategoryName: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSubCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    subCategoriesByCategoryIDAndSubCategoryName(
      categoryID: $categoryID
      subCategoryName: $subCategoryName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        categoryID
        subCategoryName
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
