import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { styled } from 'styled-components';

 const Productcard = (product) => {

  const StyledSpan = styled.span`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
          line-clamp: 2; 
  -webkit-box-orient: vertical;
  
  `

  console.log(product)
  return (
    <Col sm={1} md={3} style={{margin:"2rem 0"}}>
    <Card>
      <Card.Img variant="top" src={product.product.image} height={300} />
      <Card.Body>
        <Card.Title>{product.product.productName}</Card.Title>
        <Card.Text>
          <StyledSpan>

          {product.product.description}
          </StyledSpan>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
  )
}

export default Productcard;