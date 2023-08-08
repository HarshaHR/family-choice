import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loader from "../../images/loader.gif";

export const Profile = () => {
  const [emailId, setemailId] = useState("");
  const [givenName, setgivenName] = useState("");
  const [familyName, setfamilyName] = useState("");
  const [middleName, setmiddleName] = useState("");
  const [address, setaddress] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [hideLoader, sethideLoader] = useState(true)


  useEffect(() => {
    currentAuthenticatedUser();
  }, []);

  async function currentAuthenticatedUser() {
    try {
      const user = await Auth.currentAuthenticatedUser({
        bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
      });

      setemailId(user.attributes.email);
      setgivenName(user.attributes.given_name);
      setfamilyName(user.attributes.family_name);
      setmiddleName(user.attributes.middle_name);
      setaddress(user.attributes.address);
      setphoneNumber(user.attributes.phone_number);
    } catch (err) {
      console.log(err);
    }
  }

  async function updateUserProfile(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    window.scrollTo(0, 0);
    sethideLoader(false)
    try {
      const user = await Auth.currentAuthenticatedUser();
      const result = await Auth.updateUserAttributes(user, {
        email: user.attributes.email,
        given_name: form.get("firstName"),
        family_name: form.get("lastName"),
        middle_name: form.get("middleName"),
        address: form.get("address"),
        phone_number: form.get("mobileNo"),
      });
      sethideLoader(true)
      toast.success("Updated Profile !", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    } catch (e) {
      console.log(e);
    }
    event.target.reset();
  }

  return (
    <Container>
      <ToastContainer />
      <Row style={{ margin: "1rem 0 0 0", justifyContent:"center" }} hidden={hideLoader}>
        <img src={loader} style={{height:"50px", width:"80px"}} />
      </Row>
      <Row style={{ margin: "3rem 0 1rem 0" }}>
        <h5>My Profile</h5>
      </Row>
      <hr />
      <form onSubmit={updateUserProfile}>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: "1.125rem" }}>
                Email ID
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Email"
                name="email"
                value={emailId}
                disabled
              />
            </Form.Group>{" "}
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: "1.125rem" }}>
                Given Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                name="firstName"
                value={givenName}
                onChange={(e) => setgivenName(e.target.value)}
              />
            </Form.Group>{" "}
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: "1.125rem" }}>
                Middle Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Middle Name"
                name="middleName"
                value={middleName}
                onChange={(e) => setmiddleName(e.target.value)}
              />
            </Form.Group>{" "}
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: "1.125rem" }}>
                Family Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={familyName}
                onChange={(e) => setfamilyName(e.target.value)}
              />
            </Form.Group>{" "}
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: "1.125rem" }}>
                Address
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Address"
                name="address"
                value={address}
                onChange={(e) => setaddress(e.target.value)}
              />
            </Form.Group>{" "}
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: "1.125rem" }}>
                Mobile No
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Mobile No"
                name="mobileNo"
                value={phoneNumber}
                onChange={(e) => setphoneNumber(e.target.value)}
              />
            </Form.Group>{" "}
          </Col>
        </Row>
        <Row className="mt-3 mb-5">
          <Col sm={12}>
            <Button type="submit" variant="primary" style={{ width: "100%" }}>
              Update Profile
            </Button>
          </Col>
        </Row>
      </form>
    </Container>
  );
};
