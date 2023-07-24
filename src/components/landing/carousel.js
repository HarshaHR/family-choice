import React from "react";
import { Carousel } from "react-responsive-carousel";
import alcohol from "../../images/alcohol.jpg";
import food from "../../images/food.jpg";
import cigar from "../../images/cigar.jpg";
import Image from "react-bootstrap/Image";
import styled from "styled-components";

const StyledImage = styled(Image)`
  height: 300px;
  @media only screen and (min-width: 768px) {
    height: 600px;
  }
`;

const StyledDiv = styled.div`
  .thumbs-wrapper,
  .carousel-status {
    display: none;
  }
`;

const CarouselSection = () => {
  return (
    <StyledDiv>
    <Carousel
      showArrows={true}
      autoPlay={true}
      interval={2000}
      infiniteLoop={true}
    >
      <div>
        <StyledImage src={alcohol} />
      </div>
      <div>
        <StyledImage src={food} />
      </div>

      <div>
        <StyledImage src={cigar} />
      </div>
    </Carousel>
    </StyledDiv>
  );
};

export default CarouselSection;
