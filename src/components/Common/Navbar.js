import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";


class Menu extends Component {

  render() {
    return (
      <Navbar
      expand="lg"
      fixed="top"
      sticky="top"
      variant="dark"
    >
    <div className="container">
      <Navbar.Brand>
        <Link to="/">ColiRNR</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto" >
          <Nav.Link className="link" as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link className="link" as={Link}  to="/about">
            About
          </Nav.Link>
          <Nav.Link className="link" as={Link} to="/Blog">
            Blog
          </Nav.Link>
          <Nav.Link className="link" as={Link} to="/Contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </div>

    </Navbar>
    )
  }
}

export default Menu;
