import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { toast, ToastContainer } from "react-toastify";
import { Text, TextField } from "@aws-amplify/ui-react";

import {
  createCategory as createCategoryMutation,
  updateCategory as updateCategoryMutation,
  deleteCategory as deleteCategoryMutation
} from "../../graphql/mutations";
import { API } from "aws-amplify";
import { listCategories } from "../../graphql/queries";
import CategoryRow from "./CategoryRow";

export const CreateCategory = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [category, setCategory] = useState({});
  const [show, setShow] = useState(false);

  const [modalStatus, setModalStatus] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [newValue, setNewValue] = useState("");
  const handleClose = () => setShow(false);

  const handleShow = (status, variable, value) => {
    setShow(true);
    setCategory(variable);
    setNewValue(value);
    if (status === "update") {
      setModalStatus("update");
      setModalMessage("Are you sure you want to Update?");
    }
    if (status === "delete") {
      setModalStatus("delete");
      setModalMessage("This might impact the product with this category. Are you sure you want to Delete? ");
    }
  };

  async function fetchCategories() {
    const apiData = await API.graphql({ query: listCategories });
    const categoryFromAPI = apiData.data.listCategories.items;

    setCategoryList(categoryFromAPI);
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  async function createNewCategory(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      categoryName: form.get("categoryName"),
    };

    await API.graphql({
      query: createCategoryMutation,
      variables: { input: data },
    });
    toast.success("Added Categoryname !", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
    setTimeout(() => {

      window.location.reload();
    }, 2500)
    event.target.reset();
  }

  async function deleteCategoryFn() {
    const data = {
      id: category.id
    };

    await API.graphql({
      query: deleteCategoryMutation,
      variables: { input: data },
    });
    toast.success("Deleted Categoryname !", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
    setTimeout(() => {

      window.location.reload();
    }, 2500)
  }

  async function updateCategoryFn() {

    const data = {
      categoryName: newValue,
      id: category.id
    };

    await API.graphql({
      query: updateCategoryMutation,
      variables: { input: data },
    });
    toast.success("Updated Categoryname !", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
    fetchCategories();
  }

  const handleAction = () => {
    setShow(false);
    if (modalStatus === "update") {
      updateCategoryFn();
    }
    if (modalStatus === "delete") {
      deleteCategoryFn();
    }

  };

  return (
    <Container>
      <ToastContainer />
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

        <Row className="mt-3 mb-5">
          <Col sm={12}>
            <Button type="submit" variant="primary" style={{ width: "100%" }}>
              Create Category
            </Button>
          </Col>
        </Row>
      </form>
      <hr />
      <Row style={{ margin: "3rem 0 1rem 0" }}>
        <h5>Update Category</h5>
      </Row>
      <Row>
        <Table responsive bordered hover>
          <thead>
            <tr>
              <th>Category Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categoryList.map((category, index) => {
              return (
                <CategoryRow
                  category={category}
                  key={index}
                  handleShow={handleShow}
                />
              );
            })}
          </tbody>
        </Table>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={handleAction}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default CreateCategory;
