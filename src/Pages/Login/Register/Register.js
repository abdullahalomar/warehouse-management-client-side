import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialSignin from '../SocialSignin/SocialSignin';


const Register = () => {
  const [condition, setCondition] = useState(false);
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate('/login')
  }

  if (user) {
    navigate('/home');
}

  const handleRegister = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const condition = event.target.terms.checked;
    if (condition) {
      createUserWithEmailAndPassword(email, password);
    }

  }
    return (
        <div className='container mt-4'>
            <h2 className='mb-3'>Please Register</h2>
         
  <Form onSubmit={handleRegister}>
  <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" name='name' placeholder="Enter Your Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail" >
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name='email' placeholder="Enter email" required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name='password' placeholder="Password" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <div className='d-flex gap-2'>
            <Form.Check onClick={() => setCondition(!condition)} type="checkbox" name='terms' />
            <label htmlFor="terms" className={`${condition ? 'text-primary' : 'text-danger'} `}>Accept Out Terms & Conditions</label>
            </div>
  </Form.Group>
  <Button variant="secondary" type="submit">
    Register
  </Button>
            </Form>
            <div className='mt-3'>
        <h6>Already have an account? <Link to='/login' className='text-secondary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></h6>
        </div>
        <SocialSignin></SocialSignin>
        </div>
    );
};

export default Register;