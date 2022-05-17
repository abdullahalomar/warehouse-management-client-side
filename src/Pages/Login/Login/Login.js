import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialSignin from '../SocialSignin/SocialSignin';

const Login = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || '/';

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  if (user) {
    navigate(from, {replace: true});
  }

  const handleSubmit = event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    signInWithEmailAndPassword(email, password);
  }

  const navigateRegister = event => {
    navigate('/register');
  }
    return (
        <div className='container mt-4'>
            <h2 className='mb-3'>PLease Login</h2>
      
  <Form onSubmit={handleSubmit}>
  {/* <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Your Name" required/>
  </Form.Group> */}
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passRef} type="password" placeholder="Password" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="secondary" type="submit">
    Submit
  </Button>
        </Form>
        <div className='mt-3'>
        <h6>Are you new here? <Link to='/register' className='text-secondary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></h6>
        </div>
       <SocialSignin></SocialSignin>
        </div>
    );
};

export default Login;