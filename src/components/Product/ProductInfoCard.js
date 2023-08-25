import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { styled } from "styled-components";

const ProductInfoCard = (product) => {
  const StyledSpan = styled.span`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
  `;

  console.log(product);
  return (
    <Col sm={1} md={3} style={{ margin: "2rem 0" }}>
      <Card>
        <Card.Img
          variant="top"
          src={product.product.image}
          height={300}
          style={{ padding: "1rem 0" }}
        />
        <Card.Body style={{ background: "rgba(0,0,0,0.1)" }}>
          <Card.Title>{product.product.productName}</Card.Title>
          <Card.Text>
            <StyledSpan>{product.product.description}</StyledSpan>
          </Card.Text>
          <Row>
            <Col>
              {" "}
              <h6> &#163; {product.product.price}</h6>
            </Col>
          </Row>
          <hr />
          <Button
            variant="primary"
            style={{ width: "100%" }}
           
          >
            Add Cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductInfoCard;
