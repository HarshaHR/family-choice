import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

export const CreateProduct = () => {
  return (
    <Container>
      <Row style={{ margin: "3rem 0 1rem 0" }}>
        <h5>Add Product</h5>
      </Row>
      <hr />
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" placeholder="product name" />
          </Form.Group>{" "}
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Product Category</Form.Label>
            <Form.Select aria-label="Default select example">
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>{" "}
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Product Sub Category</Form.Label>
            <Form.Select aria-label="Default select example">
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>{" "}
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Product Description</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Product Description" />
          </Form.Group>{" "}
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Product Image</Form.Label>
            <Form.Control type="file" placeholder="product image" />
          </Form.Group>{" "}
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Product Price</Form.Label>
            <Form.Control type="number" placeholder="product price" />
          </Form.Group>{" "}
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Available Quantity </Form.Label>
            <Form.Control type="number" placeholder="product available quantity" />
          </Form.Group>{" "}
        </Col>
      </Row>
      <Row className="mt-3 mb-5">
        <Col sm={12}><Button variant="primary" style={{width:"100%"}}>Create Product</Button></Col>
      </Row>
    </Container>
  );
};
