import React, { Component } from "react";
import { Form, Button, Container, Row, Col, Modal } from "react-bootstrap";
export default class Registration extends Component {
  state = {
    user: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      dob: "",
      address: "",
      street: "",
      city: "",
      zip: "",
      credit: "",
    },
    show: false,
    validated: false,
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  updateField = (e) => {
    let user = { ...this.state.user };
    let field = e.currentTarget.id;

    user[field] = e.currentTarget.value;
    this.setState({ user: user });
    this.checkValidation();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleShow();
  };

  checkValidation = () => {
    let regex1 = /[0-9]/g;
    let regex2 = /[a-zA-Z]/g;
    if (
      this.state.user.lastName.length > 2 &&
      this.state.user.firstName.length > 3 &&
      this.state.user.email !== "" &&
      this.state.user.email.includes("@") &&
      this.state.user.address !== "" &&
      this.state.user.password.length > 8 &&
      this.state.user.password.search(regex1) !== -1 &&
      this.state.user.password.search(regex2) !== -1 &&
      this.state.user.dob.slice(0, 4) > 1910 &&
      this.state.user.city !== "" &&
      this.state.user.zip.length === 4
    ) {
      this.setState({ validated: true }, () =>
        console.log(this.state.user.zip.length)
      );
    } else {
      this.setState({ validated: false });
    }
  };

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col></Col>
            <Col className="text-center">
              <h1>REGISTER</h1>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col xs={8}>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Row>
                    <Col>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        placeholder="First name"
                        required
                        id="firstName"
                        value={this.state.user.firstName}
                        onKeyDown={this.updateField}
                        onChange={this.updateField}
                      />
                    </Col>
                    <Col>
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        placeholder="Last name"
                        required
                        id="lastName"
                        value={this.state.user.lastName}
                        onKeyDown={this.updateField}
                        onChange={this.updateField}
                      />
                    </Col>
                  </Row>
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        required
                        id="email"
                        value={this.state.user.email}
                        onKeyDown={this.updateField}
                        onChange={this.updateField}
                      />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        required
                        id="password"
                        value={this.state.user.password}
                        onKeyDown={this.updateField}
                        onChange={this.updateField}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group>
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control
                    placeholder="1234 Main St"
                    type="date"
                    required
                    id="dob"
                    value={this.state.user.dob}
                    onKeyDown={this.updateField}
                    onChange={this.updateField}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    placeholder="1234 Main St"
                    required
                    id="address"
                    value={this.state.user.address}
                    onKeyDown={this.updateField}
                    onChange={this.updateField}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control
                    placeholder="Apartment, studio, or floor"
                    id="street"
                    value={this.state.user.street}
                    onKeyDown={this.updateField}
                    onChange={this.updateField}
                  />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      required
                      id="city"
                      value={this.state.user.city}
                      onKeyDown={this.updateField}
                      onChange={this.updateField}
                    />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Zip</Form.Label>
                    <Form.Control
                      required
                      id="zip"
                      type="number"
                      value={this.state.user.zip}
                      onKeyDown={this.updateField}
                      onChange={this.updateField}
                      min="0"
                      max="99999"
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Group>
                  <Form.Label>Credit Card No.</Form.Label>
                  <Form.Control
                    type="number"
                    id="credit"
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                    value={this.state.user.credit}
                    onKeyDown={this.updateField}
                    onChange={this.updateField}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  disabled={!this.state.validated}
                >
                  Submit
                </Button>
              </Form>
            </Col>
            <Col></Col>
          </Row>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Registration Info</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <strong>First Name: </strong>
                {this.state.user.firstName}
              </div>
              <div>
                <strong>Last Name: </strong>
                {this.state.user.lastName}
              </div>
              <div>
                <strong>Email Address: </strong>
                {this.state.user.email}
              </div>
              <div>
                <strong>Date of Birth: </strong>
                {this.state.user.firstName}
              </div>
              <div>
                <strong>Address: </strong>
                {this.state.user.address}
              </div>
              <div>
                <strong>Street: </strong>
                {this.state.user.street}
              </div>
              <div>
                <strong>City: </strong>
                {this.state.user.city}
              </div>
              <div>
                <strong>Zip: </strong>
                {this.state.user.zip}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </>
    );
  }
}
