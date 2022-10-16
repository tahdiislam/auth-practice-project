import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from './userContext';

const Header = () => {
    const {user} = useContext(authContext)
    // console.log(user);
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Auth Int</Link>
                    {/* <Link to='/home' className="btn btn-ghost normal-case text-xl"></Link> */}
                    <Link to='register' className="btn btn-ghost normal-case text-lg font-medium">Register</Link>
                    <Link to='login' className="btn btn-ghost normal-case text-lg font-medium">Login</Link>
                    <button className="btn btn-success">Sign out</button>
                {user?.email && <span className='ml-4'>welcome {user.email}</span>}
            </div>
        </div>
    );
};

export default Header;