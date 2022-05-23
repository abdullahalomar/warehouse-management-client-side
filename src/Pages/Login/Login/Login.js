import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialSignin from '../SocialSignin/SocialSignin';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import useToken from '../../../hooks/useToken';

const Login = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || '/';
  let errorElement;

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const [token] = useToken(user);

  if (loading || sending) {
    return <Loading></Loading>
}

  if (token) {
    navigate(from, {replace: true});
  }

  if (error) {
    errorElement = <div>
        <h6 className='text-danger'>Error: {error?.message}</h6>
    </div> 
}

  const handleSubmit = async event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;

    await signInWithEmailAndPassword(email, password);
  }

  const navigateRegister = event => {
    navigate('/register');
  }

  const resetPassword = async () => {
          const email = emailRef.current.value;
          if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
    }
          else {
            toast('please enter your email');
    }
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
    <Form.Control ref={emailRef} type="email" name='email' placeholder="Enter email" required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passRef} type="password" name='password' placeholder="Password" required/>
  </Form.Group>
  {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
  <Button variant="secondary" type="submit">
    Submit
  </Button>
        </Form>
        {errorElement}
        <div className='mt-3'>
        <h6>Are you new here? <Link to='/register' className='text-secondary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></h6>
        <h6>Forget Password? <button to='/register' className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button></h6>
        </div>
        <SocialSignin></SocialSignin>
        
        </div>
    );
};

export default Login;