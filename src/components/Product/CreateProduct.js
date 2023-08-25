import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { toast, ToastContainer } from "react-toastify";
import loader from "../../images/loader.gif";

import {
  Text,
  TextField,
  SelectField,
  TextAreaField,
} from "@aws-amplify/ui-react";

import { createProduct as createProductMutation } from "../../graphql/mutations";
import { API, Storage } from "aws-amplify";
import * as queries from "../../graphql/queries";

export const CreateProduct = () => {


  async function createNewProduct(event) {
    event.preventDefault();
window.scrollTo(0, 0);
    sethideLoader(false)
    const form = new FormData(event.target);

    const image = form.get("image");

    const data = {
      productName: form.get("productName"),
      productCategory: form.get("productCategory"),
      productSubCategory: form.get("productSubCategory"),
      description: form.get("productDescription"),
      image: image.name,
      price: form.get("productPrice"),
      availableQuantity: form.get("availableQuantity"),
    };

    if (!!data.image) await Storage.put(data.productName, image);
    await API.graphql({
      query: createProductMutation,
      variables: { input: data },
    });
    sethideLoader(true)
      toast.success("Added Product !", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    event.target.reset();
  }
  const [categoryList, setCategoryList] = useState([]);
  const [subCategoryList, setSubCategoryList] = useState([]);
  const [hideLoader, sethideLoader] = useState(true)

  async function fetchCategories() {
    const apiData = await API.graphql({ query: queries.listCategories });
    const categoryFromAPI = apiData.data.listCategories.items;

    setCategoryList(categoryFromAPI);
    console.log("Fetch", categoryFromAPI);
  }
  useEffect(() => {
    fetchCategories();
  }, []);

  async function handleCategoryChange(event) {
    const productId = event.target.value;

    let tempSubCategory = [];
    const apiData = await API.graphql({ query: queries.listSubCategories });

    for (let i = 0; i < apiData.data.listSubCategories.items.length; i++) {
      if (apiData.data.listSubCategories.items[i].categoryID == productId) {
        tempSubCategory.push(apiData.data.listSubCategories.items[i]);
      }
    }
    setSubCategoryList(tempSubCategory);
  }

  return (
    <Container>
      <ToastContainer />
      <Row style={{ margin: "1rem 0 0 0", justifyContent:"center" }} hidden={hideLoader}>
        <img src={loader} style={{height:"50px", width:"80px"}} />
      </Row>
      <Row style={{ margin: "3rem 0 1rem 0" }}>
        <h5>Add Product</h5>
      </Row>
      <hr />
      <form onSubmit={createNewProduct}>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <TextField
                name="productName"
                placeholder="Product Name"
                label={
                  <Text style={{ fontWeight: "bold", fontSize: "1.125rem" }}>
                    Product Name
                  </Text>
                }
                required
              />
            </Form.Group>{" "}
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <SelectField
                label={
                  <Text style={{ fontWeight: "bold", fontSize: "1.125rem" }}>
                    Product Category
                  </Text>
                }
                name="productCategory"
                onChange={handleCategoryChange}
              >
                {categoryList.map((category, index) => {
                  return (
                    <option value={category.id} key={index}>
                      {category.categoryName}
                    </option>
                  );
                })}
              </SelectField>
            </Form.Group>{" "}
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <SelectField
                label={
                  <Text style={{ fontWeight: "bold", fontSize: "1.125rem" }}>
                    Product Sub Category
                  </Text>
                }
                name="productSubCategory"
              >
                {subCategoryList.map((subcategory, index) => {
                  return (
                    <option value={subcategory.id} key={index}>
                      {subcategory.subCategoryName}
                    </option>
                  );
                })}
              </SelectField>
            </Form.Group>{" "}
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <TextAreaField
                autoComplete="off"
                isRequired={false}
                label={
                  <Text style={{ fontWeight: "bold", fontSize: "1.125rem" }}>
                    Product Description
                  </Text>
                }
                labelHidden={false}
                name="productDescription"
                placeholder="Product Description"
                rows="3"
                size="small"
                wrap="nowrap"
              />
            </Form.Group>{" "}
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: "1.125rem" }}>
                Product Image
              </Form.Label>
              <Form.Control
                type="file"
                placeholder="product image"
                name="image"
              />
            </Form.Group>{" "}
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: "1.125rem" }}>
                Product Price
              </Form.Label>
              <Form.Control
                type="number"
                name="productPrice"
                placeholder="product price"
              />
            </Form.Group>{" "}
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: "1.125rem" }}>
                Available Quantity{" "}
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="product available quantity"
                name="availableQuantity"
              />
            </Form.Group>{" "}
          </Col>
        </Row>
        <Row className="mt-3 mb-5">
          <Col sm={12}>
            <Button type="submit" variant="primary" style={{ width: "100%" }}>
              Create Product
            </Button>
          </Col>
        </Row>
      </form>
    </Container>
  );
};
