// components/Protected.js
import { useAuthenticator, Heading } from "@aws-amplify/ui-react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export function Shop() {
  const { route } = useAuthenticator((context) => [context.route]);
  const navigate = useNavigate();

  //const message = route === "authenticated" ? "FIRST PROTECTED ROUTE!" : "Loading...";

  return (
    <Container>
      <Row style={{marginTop: "3rem"}} className="justify-content-xs-center justify-content-md-end">
        <Button variant="primary" onClick={() => navigate('/shop/create')} style={{width:"auto"}}>Create</Button>
      </Row>
    </Container>
  );
}
