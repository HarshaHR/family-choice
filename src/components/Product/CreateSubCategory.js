import React, {useState,useEffect} from "react";
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
import { listCategories } from "../../graphql/queries";

import { createSubCategory as createSubCategoryMutation } from "../../graphql/mutations";
import { API, Storage } from "aws-amplify";

export const CreateSubCategory = () => {

    const [categoryList, setCategoryList] = useState([]);

    //const message = route === "authenticated" ? "FIRST PROTECTED ROUTE!" : "Loading...";
  
    async function fetchCategories() {
      const apiData = await API.graphql({ query: listCategories });
      const categoryFromAPI = apiData.data.listCategories.items;
  
      setCategoryList(categoryFromAPI);
      console.log("Fetch", categoryFromAPI);
    }

    useEffect(() => {
        fetchCategories();
      }, []);
  async function createNewSubProduct(event) {
    event.preventDefault();
    const form = new FormData(event.target);

    const data = {
        subCategoryName: form.get("subCategoryName"),
        categoryID: form.get("productCategory")
    };

    await API.graphql({
        query: createSubCategoryMutation,
        variables: { input: data },
      });
      alert("success")
    event.target.reset();
  }

  return (
    <Container>
      <Row style={{ margin: "3rem 0 1rem 0" }}>
        <h5>Add Product</h5>
      </Row>
      <hr />
      <form onSubmit={createNewSubProduct}>
      <Row>
          <Col>
            <Form.Group className="mb-3">
              <SelectField  label={<Text style={{fontWeight:"bold", fontSize:"1.125rem"}}>Product Category</Text>} name="productCategory">
                {categoryList.map((category,index) => {
                    return <option value={category.id} key={index}>{category.categoryName}</option>
                })}
              </SelectField>
            </Form.Group>{" "}
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <TextField
                name="subCategoryName"
                placeholder="Sub Category Name"
                label={<Text style={{fontWeight:"bold", fontSize:"1.125rem"}}>Sub Category Name</Text>}
                required
              />
            </Form.Group>{" "}
          </Col>
        </Row>
        
        
        <Row className="mt-3 mb-5">
          <Col sm={12}>
            <Button type="submit" variant="primary" style={{ width: "100%" }}>
              Create Sub Category
            </Button>
          </Col>
        </Row>
      </form>
    </Container>
  );
};

export default CreateSubCategory
