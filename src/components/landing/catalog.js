import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/esm/Container';
import cokecola from "../../images/Fizzy-Drinks-300x300.png";
import catering from  "../../images/Catering-Groceries-300x300.png";
import dental from "../../images/Dental-Care.png";
import dips from "../../images/Dips-300x300.png";
import softdrinks from  "../../images/Soft-Drinks-300x300.png";
import alcohol from   "../../images/exclusive-drinks-range-1-300x300.png";
import { styled } from 'styled-components';

const StyledContainer = styled(Container)`
    padding-top:1rem;
`

export const Catalog = () => {
  return (
    <StyledContainer fluid>
    <CardGroup>
      <Card className="text-center">
        <Card.Img variant="top" src={cokecola}/>
        <Card.Body>
          <Card.Title>Fizzy Drinks</Card.Title>
        </Card.Body>
      </Card>
      <Card className="text-center">
        <Card.Img variant="top" src={catering} />
        <Card.Body>
          <Card.Title >Groceries</Card.Title>
        </Card.Body>
      </Card>
      <Card className="text-center">
        <Card.Img variant="top" src={dental} />
        <Card.Body>
          <Card.Title>Dental Care</Card.Title>
        </Card.Body>
      </Card>
      <Card className="text-center">
        <Card.Img variant="top" src={dips}/>
        <Card.Body>
          <Card.Title>Snacks & Dips</Card.Title>
        </Card.Body>
      </Card>
      <Card className="text-center">
        <Card.Img variant="top" src={softdrinks}/>
        <Card.Body>
          <Card.Title>Soft Drinks</Card.Title>
        </Card.Body>
      </Card>
      <Card className="text-center">
        <Card.Img variant="top" src={alcohol}/>
        <Card.Body>
          <Card.Title>Alcohol</Card.Title>
        </Card.Body>
      </Card>
      <Card className="text-center">
        <Card.Img variant="top" src={softdrinks}/>
        <Card.Body>
          <Card.Title>Soft Drinks</Card.Title>
        </Card.Body>
      </Card>
    </CardGroup>
    </StyledContainer>
  )
}

export default Catalog
