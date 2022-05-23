import React from 'react';
import google from '../../../images/social-icons/icons8-google-48.png';
import github from '../../../images/social-icons/icons8-github-50.png';
import facebook from '../../../images/social-icons/icons8-facebook-48.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import useToken from '../../../hooks/useToken';

const SocialSignin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gituser, gitloading, giterror] = useSignInWithGithub(auth);
    const [token] = useToken(user || gituser)
    const navigate = useNavigate();
    const location = useLocation();
  let from = location.state?.from?.pathname || '/';
  let errorElement;

    if (loading || gitloading) {
        return <Loading></Loading>
    }

    if (error || giterror) {
          errorElement = <div>
              <h6 className='text-danger'>Error: {error?.message} { giterror?.message}</h6>
          </div> 
    }

    if (token) {
        navigate(from, {replace: true});
      }
    return (
        <div>
            <div className='mt-4'>
            {errorElement}
                <button
                onClick={() => signInWithGoogle()}
                className='btn btn-secondary w-100'>
                <img src={google} alt="" />
                Google Sign In
                </button>
                <button
                onClick={() => signInWithGithub()}
                className='btn btn-secondary w-100 mt-3'>
                <img src={github} alt="" />
                Google Sign In
                </button>
                
                {/* <button className='btn btn-secondary w-100 mt-3'>
                <img src={facebook} alt="" />
                Facebook Sign In
                </button> */}
            </div>
        </div>
    );
};

export default SocialSignin;