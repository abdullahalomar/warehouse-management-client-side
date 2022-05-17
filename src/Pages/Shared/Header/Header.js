import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
  <Container>
      <Navbar.Brand href="/home">
  Laptop Warehouse</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="home">Home</Nav.Link>
      <Nav.Link as={Link} to="inventories">Inventory</Nav.Link>
      <Nav.Link as={Link} to="#features">Miningful sec</Nav.Link>
      <Nav.Link as={Link} to="#pricing">Miningful sec</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="">More deets</Nav.Link>
      <Nav.Link as={Link} to="login">Login</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;