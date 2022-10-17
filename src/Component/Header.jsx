import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from './userContext';

const Header = () => {
    const {user, logOut} = useContext(authContext)
    // console.log(logOut);
    // sing out 
    const handleSignOut = () => {
        logOut()
        .then(() => {
            // sing out
        })
        .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Auth Int</Link>
                    {user?.uid && <Link to='/home' className="btn btn-ghost normal-case text-lg font-medium">Home</Link>}
                    {user?.uid && <Link to='/orders' className="btn btn-ghost normal-case text-lg font-medium">Orders</Link>}
                    {!user?.uid && <Link to='register' className="btn btn-ghost normal-case text-lg font-medium">Register</Link>}
                    {!user?.uid && <Link to='login' className="btn btn-ghost normal-case text-lg font-medium">Login</Link>}
                    {user?.email && <span className='mx-4'>welcome {user.email}</span>}
                    {user?.email && <button onClick={handleSignOut}  className="btn btn-success">Sign out</button>}
            </div>
        </div>
    );
};

export default Header;