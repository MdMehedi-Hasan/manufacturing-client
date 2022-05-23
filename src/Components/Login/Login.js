import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init'

const Login = () => {
    const [register, setRegister] = useState(true);
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
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user || gUser || newUser) {
            navigate(from, { replace: true });
        }
    },[user || gUser || newUser])
    
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e?.target?.name?.value;
        const email = e?.target?.email?.value;
        const password = e?.target?.password?.value;
        const user = { name, email, password }
        createUserWithEmailAndPassword(email,password)
        console.log("Register-clicked", user);
        e.target.reset();
        }
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e?.target?.email?.value;
        const password = e?.target?.password?.value;
        const user = {email,password}
        console.log("Login-clicked");
        signInWithEmailAndPassword(email,password)
        e.target.reset();
        }
    return (
        <div>
            <div className="hero lg:block">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    {/*   <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div> */}
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={register ? (e) =>handleRegister(e) : (e) =>handleLogin(e)}>
                            <div className="card-body">
                                {register ? <h1 className='text-4xl text-center'>Register</h1> : <h1 className='text-4xl text-center'>Log in</h1>}
                                {register && <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your name</span>
                                    </label>
                                    <input type="text" placeholder="name" name="name" className="input input-bordered" />
                                </div>}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" name="password" className="input input-bordered" />
                                    {!register && <label className="label">
                                        <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>}
                                </div>
                                <div className="form-control mt-2">
                                    <input className="btn btn-primary" type="submit" value={register ? "Submit" : "Log in"} />
                                </div>
                                <div className='text-center mt-2'>{register ? <div>Already have an account? <button className='text-primary' onClick={(e) => { e.preventDefault(); setRegister(false) }}> Please login</button></div> : <div>Don't have any account? <button className='text-primary' onClick={(e) => { e.preventDefault(); setRegister(true) }}> Register here</button></div>}</div>
                                <div className="divider">OR</div>
                                <button onClick={() => signInWithGoogle()} className="btn btn-outline">Sign in with google</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;