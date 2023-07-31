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
              <Nav.Link onClick={() => navigate('/protected')}>Shop</Nav.Link>
              <Nav.Link onClick={() => navigate('/protected')}>About Us</Nav.Link>
              <Nav.Link onClick={() => navigate('/protected')}>Contact Us</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2}>
              {route !== 'authenticated' ? (
          <Button variant="primary" onClick={() => navigate('/login')}>Login</Button>
        ) : (
          <Button variant="primary" onClick={() => logOut()}>Logout</Button>
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