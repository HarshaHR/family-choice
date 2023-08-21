/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
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
export const onCreateSubCategory = /* GraphQL */ `
  subscription OnCreateSubCategory(
    $filter: ModelSubscriptionSubCategoryFilterInput
  ) {
    onCreateSubCategory(filter: $filter) {
      id
      categoryID
      subCategoryName
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateSubCategory = /* GraphQL */ `
  subscription OnUpdateSubCategory(
    $filter: ModelSubscriptionSubCategoryFilterInput
  ) {
    onUpdateSubCategory(filter: $filter) {
      id
      categoryID
      subCategoryName
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteSubCategory = /* GraphQL */ `
  subscription OnDeleteSubCategory(
    $filter: ModelSubscriptionSubCategoryFilterInput
  ) {
    onDeleteSubCategory(filter: $filter) {
      id
      categoryID
      subCategoryName
      createdAt
      updatedAt
      __typename
    }
  }
`;
