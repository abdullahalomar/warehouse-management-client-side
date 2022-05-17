import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Register = () => {
    return (
        <div className='container mt-4'>
            <h2 className='mb-3'>Please Register</h2>
         
            <Form>
  <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Your Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="secondary" type="submit">
    Submit
  </Button>
            </Form>
            <h6>Already have an account? <Link to='/login'>Login</Link></h6> 
        </div>
    );
};

export default Register;