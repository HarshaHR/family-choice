import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "aws-amplify";
import * as queries from "../../graphql/queries";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const ProductInfo = () => {
  let { productId } = useParams();

  const [curentProduct, setcurentProduct] = useState(null);

  async function getProduct(productId) {
    const result = await API.graphql({
      query: queries.getProduct,
      variables: { id: productId },
    });

    console.log(result.data.getProduct);
    setcurentProduct(result.data.getProduct);
  }

  useEffect(() => {
    getProduct(productId);
  }, []);

  return <Container style={{margin:"3rem"}}>ProductInfo</Container>;
};

export default ProductInfo;
