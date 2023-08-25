import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import {
  Text,
  TextField
} from "@aws-amplify/ui-react";

import { createCategory as createCategoryMutation } from "../../graphql/mutations";
import { API } from "aws-amplify";

export const CreateCategory = () => {

  async function createNewCategory(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
        categoryName: form.get("categoryName")
    };

    await API.graphql({
      query: createCategoryMutation,
      variables: { input: data },
    });
    alert("success")
    event.target.reset();
  }

  return (
    <Container>
      <Row style={{ margin: "3rem 0 1rem 0" }}>
        <h5>Add Category</h5>
      </Row>
      <hr />
      <form onSubmit={createNewCategory}>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <TextField
                name="categoryName"
                placeholder="Category Name"
                label={<Text style={{fontWeight:"bold", fontSize:"1.125rem"}}>Product Name</Text>}
                required
              />
            </Form.Group>{" "}
          </Col>
        </Row>
        
        <Row className="mt-3 mb-5">
          <Col sm={12}>
            <Button type="submit" variant="primary" style={{ width: "100%" }}>
              Create Category
            </Button>
          </Col>
        </Row>
      </form>
    </Container>
  );
};

export default CreateCategory