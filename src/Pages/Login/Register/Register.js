import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialSignin from '../SocialSignin/SocialSignin';
import { async } from '@firebase/util';
import Loading from '../../Shared/Loading/Loading';
import useToken from '../../../hooks/useToken';


const Register = () => {
  const [condition, setCondition] = useState(false);
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, errorupdate] = useUpdateProfile(auth);
  const [token] = useToken(user);
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate('/login')
  }

  if (loading || updating) {
    return <Loading></Loading>
}

  if (token) {
    navigate('/home');
}

  const handleRegister = async event => {
    event.preventDefault();
    const displayName = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    
    if (condition) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName });
      console.log('Updated profile');
      
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