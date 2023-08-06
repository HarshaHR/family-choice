import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import {
  Text,
  TextField,
  SelectField,
  TextAreaField,
} from "@aws-amplify/ui-react";

import { createProduct as createProductMutation } from "../../graphql/mutations";
import { API, Storage } from "aws-amplify";

export const CreateProduct = () => {

  async function createNewProduct(event) {
    event.preventDefault();
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
    event.target.reset();
  }

  return (
    <Container>
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
                label={<Text style={{fontWeight:"bold", fontSize:"1.125rem"}}>Product Name</Text>}
                required
              />
            </Form.Group>{" "}
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <SelectField  label={<Text style={{fontWeight:"bold", fontSize:"1.125rem"}}>Product Category</Text>} name="productCategory">
                <option value="drinks">Drinks</option>
                <option value="groceries">Groceries</option>
                <option value="fruits">Fruis</option>
              </SelectField>
            </Form.Group>{" "}
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <SelectField
                 label={<Text style={{fontWeight:"bold", fontSize:"1.125rem"}}>Product Sub Category</Text>}
                name="productSubCategory"
              >
                <option value="drinks">Drinks</option>
                <option value="groceries">Groceries</option>
                <option value="fruits">Fruis</option>
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
                label={<Text style={{fontWeight:"bold", fontSize:"1.125rem"}}>Product Description</Text>}
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
              <Form.Label style={{fontWeight:"bold", fontSize:"1.125rem"}}>Product Image</Form.Label>
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
              <Form.Label style={{fontWeight:"bold", fontSize:"1.125rem"}}>Product Price</Form.Label>
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
              <Form.Label style={{fontWeight:"bold", fontSize:"1.125rem"}}>Available Quantity </Form.Label>
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
