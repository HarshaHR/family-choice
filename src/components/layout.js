// components/Layout.js
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthenticator,Heading, View } from '@aws-amplify/ui-react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/logo.png";
import Footer from './Footer';
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function Layout() {
  const { route, signOut } = useAuthenticator((context) => [
    context.route,
    context.signOut,
  ]);
  const navigate = useNavigate();

  function logOut() {
    signOut();
    navigate('/login');
  }
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="Family Choice"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
              <Nav.Link onClick={() => navigate('/shop')}>Shop</Nav.Link>
              <NavDropdown title="Product" id="basic-nav-dropdown">
              <NavDropdown.Item  onClick={() => navigate("/product/create")}>Create Product</NavDropdown.Item>
              <NavDropdown.Item  onClick={() => navigate("/product/category")}>
                Add Category
              </NavDropdown.Item>
              <NavDropdown.Item  onClick={() => navigate("/product/subcategory")}>
                Add Sub-Category
              </NavDropdown.Item>
            </NavDropdown>
              <Nav.Link onClick={() => navigate('/about')}>About Us</Nav.Link>
              <Nav.Link onClick={() => navigate('/contact')}>Contact Us</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2}>
              {route !== 'authenticated' ? (
          <Button variant="primary" onClick={() => navigate('/login')}>Login</Button>
        ) : (

          <NavDropdown title={<FontAwesomeIcon icon={faUser} />} id="basic-nav-dropdown">
              <NavDropdown.Item  onClick={() => navigate('/profile')}>Profile</NavDropdown.Item>
              <NavDropdown.Item  onClick={() => logOut()}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>

        )}
        
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
      <Footer />
    </>
  );
}