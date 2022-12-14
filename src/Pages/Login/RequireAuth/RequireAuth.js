import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }

    if (user.providerData[0]?.providerId === 'password' &&!user.emailVerified) {
        return <div className='text-center mt-5'>
            <h3 className='text-danger'>Your Email in not verified!</h3>
            <h5 className='text-success'>Please Verify your email address</h5>
            <button onClick={async () => {
                await sendEmailVerification();
                toast('Send Email');
            }} className='btn btn-secondary'>Send Email Verification</button>
        </div>
        
    }

    return children;
};

export default RequireAuth;