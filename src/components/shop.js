// components/Protected.js
import { useAuthenticator, Heading } from "@aws-amplify/ui-react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { API, Storage } from "aws-amplify";
import { listProducts } from "../graphql/queries";
import Productcard from "./Product/Productcard";
import { deleteProduct as deleteProductMutation } from "../graphql/mutations";

export function Shop() {
  const { route } = useAuthenticator((context) => [context.route]);
  const navigate = useNavigate();

  const [productList, setproductList] = useState([]);

  //const message = route === "authenticated" ? "FIRST PROTECTED ROUTE!" : "Loading...";

  async function fetchProducts() {
    const apiData = await API.graphql({ query: listProducts });
    const productsFromAPI = apiData.data.listProducts.items;

    await Promise.all(
      productsFromAPI.map(async (product) => {
        if (product.image) {
          const url = await Storage.get(product.productName);
          product.image = url;
        }
        return product;
      })
    );

    setproductList(productsFromAPI);
    console.log("Fetch", productsFromAPI);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  async function deleteNote({ id, name }) {
    await Storage.remove(name);
    await API.graphql({
      query: deleteProductMutation,
      variables: { input: { id } },
    });
  }

  //deleteNote({ id : "6e0c7079-3b4a-4f38-be60-4432a08f88aa", name:"" })

  return (
    <Container>
      <Row
        style={{ marginTop: "3rem" }}
        className="justify-content-xs-center justify-content-md-end"
      >
        <Button
          variant="primary"
          onClick={() => navigate("/shop/create")}
          style={{ width: "auto" }}
        >
          Create
        </Button>
      </Row>
      <hr />
      <Row >
        {productList.map((product, index) => {
          return <Productcard product={product} key={index} />;
        })}
      </Row>
    </Container>
  );
}
