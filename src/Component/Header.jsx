import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from './userContext';

const Header = () => {
    const {user} = useContext(authContext)
    
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Auth Int</Link>
                <div>
                    {/* <Link to='/home' className="btn btn-ghost normal-case text-xl"></Link> */}
                    <Link to='register' className="btn btn-ghost normal-case text-lg font-medium">Register</Link>
                    <Link to='login' className="btn btn-ghost normal-case text-lg font-medium">Login</Link>
                </div>
                {user?.displayName && <span>welcome {user.displayName}</span>}
            </div>
        </div>
    );
};

export default Header;