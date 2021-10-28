import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const SignIn = () => {
    const {googleSignIn,setUser,setError}=useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location?.state?.from || "/home";

    //googleSignInHandler 
    const googleSignInHandler =()=>{
        googleSignIn()
        .then(result=>{
            setUser(result.user)
            console.log(result.user);
            history.push(redirect_url);
        })
        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
          });
        
    }
    return (
        <div>
           <button onClick={googleSignInHandler} type="button" className="btn btn-danger mt-5">google sign In</button>
        </div>
    );
};

export default SignIn;