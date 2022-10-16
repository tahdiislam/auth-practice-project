import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from './userContext';

const Register = () => {
    const {createUser, singInWithGoogle} = useContext(authContext)
    // console.log(singInWithGoogle);
    // form submit handle
    const handleSubmitForm = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        
        createUser(email, password)
         .then(result => {
            const user = result.user
            console.log('register', user);
         })
         .catch(error => {
            console.log(error);
         })
    }
    // sing in with google 
    const handleGoogleSignIn = () => {
        singInWithGoogle()
         .then(result => {
            const user = result.user;
            // console.log(user);
         })
         .catch(error => {
            console.error(error);
         })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmitForm} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="name" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-email">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                    <label className="label">
                        <Link to='/login' className="label-text-alt link link-hover">log in here</Link>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button type='submit' className="btn btn-primary">Register</button>
                    </div>
                    <button onClick={handleGoogleSignIn} type='button' className="btn btn-accent">Google</button>
                    
                </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Register;