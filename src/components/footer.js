import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import { styled } from "styled-components";
import logo from "../images/logo.png";


const CopyWriteCol = styled(Col)`
  text-align: Center;
`;

const Footer = () => {
  return (
    <>
    
    <Navbar style={{ paddingBottom: "0", flexWrap: "wrap" }}>
    <Row style={{backgroundColor: "red",width:"100%", textAlign:"center", justifyContent:"center", padding:"1rem 0", margin: "0"}}>
        <img
              src={logo}
              style={{height: "100px", width : "120px"}}
              alt="Family Choice"
            />
        </Row>
      <Row
        style={{ width: "100%", padding: "1rem 0", backgroundColor: "white" }}
      >
        <CopyWriteCol>
          © 2023 Family Choice Online. All Rights Reserved.
        </CopyWriteCol>
      </Row>
    </Navbar>
    </>
  );
};

export default Footer;
