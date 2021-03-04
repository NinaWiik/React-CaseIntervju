import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import InfectionControlForm from "../form/InfectionControlForm";
import Home from "../home/Home";

function Navigation() {
  return (
    <Router>
      <Navbar expand="lg">
        <Navbar.Brand href="/">LOGO</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link to="/" exact>
            Home
          </Nav.Link>
        </Nav>
      </Navbar>
      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/admin" component={InfectionControlForm} />
        </Switch>
      </Container>
    </Router>
  );
}

export default Navigation;
