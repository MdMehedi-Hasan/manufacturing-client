import React, { useEffect, useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
// import useToken from '../../hooks/useToken';

const Login = () => {
    const [existingUser] = useAuthState(auth);
    const [register, setRegister] = useState(false);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        newUser,
        newLoading,
        newError,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    // const [token] = useToken(user || gUser || newUser)
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e?.target?.name?.value;
        const email = e?.target?.email?.value;
        const password = e?.target?.password?.value;
        createUserWithEmailAndPassword(email, password)
        e.target.reset();
    }
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e?.target?.email?.value;
        const password = e?.target?.password?.value;
        signInWithEmailAndPassword(email, password)
        e.target.reset();
    }
    const handleGoogleLogin = () => {
        signInWithGoogle()
    }
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user || gUser || newUser) {
            fetch('https://wrench-and-screws.vercel.app/users', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ existingUser }),
            })
                .then(response => response.json())
                .then(data => {

                })
            navigate(from, { replace: true });
        }
    }, [user || gUser || newUser])
    return (
        <div>
            <div className="hero lg:block">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={register ? (e) => handleRegister(e) : (e) => handleLogin(e)}>
                                {register ? <h1 className='text-4xl text-center'>Register</h1> : <h1 className='text-4xl text-center'>Log in</h1>}
                                {register && <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your name</span>
                                    </label>
                                    <input required type="text" placeholder="name" name="name" className="input input-bordered" />
                                </div>}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input required type="email" placeholder="email" name="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input required type="password" placeholder="password" name="password" className="input input-bordered" />
                                    {!register && <label className="label">
                                        <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>}
                                </div>
                                {error && <p className='text-red-500'>{error?.message?.split(':')[1]}</p>}
                                {gError && <p className='text-red-500'>{gError?.message?.split(':')[1]}</p>}
                                {newError && <p className='text-red-500'>{newError?.message}</p>}
                                <div className="form-control mt-2">
                                    <input required className="btn btn-primary" type="submit" value={register ? "Submit" : "Log in"} />
                                </div>
                            </form>
                            <div className='text-center mt-2'>{register ? <div>Already have an account? <button className='text-primary' onClick={(e) => { e.preventDefault(); setRegister(false) }}> Please login</button></div> : <div>Don't have any account? <button className='text-primary' onClick={(e) => { e.preventDefault(); setRegister(true) }}> Register here</button></div>}</div>
                            <div className="divider">OR</div>
                            <button onClick={handleGoogleLogin} className="btn btn-outline">Sign in with google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;