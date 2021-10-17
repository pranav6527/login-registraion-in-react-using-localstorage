import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import { Nav, Navbar, NavItem, Container, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <h1>Welcome</h1>
        <BrowserRouter>
          <Container justify-content-between className="mt-5">
            <Row>
              <Col md={{ span: 5 }}>
                <LinkContainer
                  to="/register"
                  className="btn btn-primary btn-block"
                >
                  <NavItem>Register</NavItem>
                </LinkContainer>
              </Col>
              <br />
              <Col md={{ span: 5 }}>
                <LinkContainer
                  to="/login"
                  className="btn btn-primary btn-block"
                >
                  <NavItem>Login</NavItem>
                </LinkContainer>
              </Col>
            </Row>
          </Container>

          <Routes />
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
