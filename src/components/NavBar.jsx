import React, { Component } from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown,
  Col,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand href="#home">Book Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/" className="nav-link">
                About
              </Link>
              <Link to="/registration" className="nav-link">
                Register
              </Link>
              {/* <NavDropdown
                id="collasible-nav-dropdown"
                title={this.state.category}
              >
                {bookCategories.map((category, index) => {
                  return (
                    <NavDropdown.Item
                      href="#/action-1"
                      key={`dropdown-category-${index}`}
                      onClick={() => this.handleDropdownChange(category)}
                    >
                      {category}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown> */}
              <Form inline>
                <FormControl
                  id="searchInp"
                  type="text"
                  placeholder={<FontAwesomeIcon icon={faSearch} />}
                  className="mr-sm-2"
                  onChange={(e) => this.handleSearch(e.target.value)}
                />
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <br />
        <Row>
          <Col>
            {/* <Route
                path="/registration"
                exact
                render={(props) => <Registration {...props} />}
              />
              <Route
                path="/"
                exact
                render={(props) => (
                  <BookList {...props} books={this.state.books} />
                )}
              /> */}
          </Col>
        </Row>
      </>
    );
  }
}
export default NavBar;
