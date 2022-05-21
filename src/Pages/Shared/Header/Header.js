import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavLink} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);
    
  const handleSignout = () => {
    signOut(auth);
  }
    return (
        <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark" sticky='top'>
  <Container>
      <Navbar.Brand href="/home">
  Laptop Warehouse</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="home">Home</Nav.Link>
      {/* <Nav.Link as={Link} to="inventories">Inventory</Nav.Link> */}
      <Nav.Link as={Link} to="home#features">Miningful sec</Nav.Link>
      <Nav.Link as={Link} to="home#pricing">Miningful sec</Nav.Link>
      
    </Nav>
    <Nav>
              <Nav.Link as={Link} to="blog">Blog</Nav.Link>
              {
                user && <>
                  <NavLink as={Link} to="addinventory">Add Item</NavLink>
                  
                  <NavLink as={Link} to="manageinventory">Manage Item</NavLink>
                  
                <NavLink as={Link} to="myitem">My Item</NavLink>
                </>
              }
              {
                user ?
                  
                  <button onClick={handleSignout} className='btn btn-danger'>Signout</button>
                  
                  :

                  <Nav.Link as={Link} to="login">Login</Nav.Link>
      }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;