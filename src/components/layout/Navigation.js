import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="/">LOGO</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link to="/" exact>
          Home
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
