import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init'

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div>
            <button onClick={()=>signInWithGoogle()} className="btn btn-outline">Sign in with google</button>
        </div>
    );
};

export default Login;