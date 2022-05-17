import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


const Register = () => {
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate('/login')
  }
  const handleRegister = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    
  }
    return (
        <div className='container mt-4'>
            <h2 className='mb-3'>Please Register</h2>
         
  <Form onSubmit={handleRegister}>
  <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Your Name" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail" >
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="secondary" type="submit">
    Register
  </Button>
            </Form>
            <div className='mt-3'>
        <h6>Already have an account? <Link to='/login' className='text-secondary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></h6>
        </div>
        </div>
    );
};

export default Register;