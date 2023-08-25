import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API, Storage } from "aws-amplify";
import * as queries from "../../graphql/queries";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ProductInfoCard from "./ProductInfoCard";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const ProductInfo = () => {
  let { productId } = useParams();
  const navigate = useNavigate();

  const [curentProduct, setcurentProduct] = useState(null);

  async function getProduct(productId) {
    const result = await API.graphql({
      query: queries.getProduct,
      variables: { id: productId },
    });

    const url = await Storage.get(result.data.getProduct.productName);
    result.data.getProduct.image = url;

    console.log(result.data.getProduct);
    setcurentProduct(result.data.getProduct);
  }

  useEffect(() => {
    getProduct(productId);
  }, []);

  return (
    <Container style={{ margin: "3rem" }}>
      <Row>
        <Button
          variant="primary"
          style={{ width: "content" }}
          onClick={() => navigate(`/shop`)}
        >
          Back
        </Button>
      </Row>
      {curentProduct != null ? <ProductInfoCard product={curentProduct} /> : ""}
      ;
    </Container>
  );
};

export default ProductInfo;
