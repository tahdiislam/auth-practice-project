import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Auth Int</Link>
                <div>
                    {/* <Link to='/home' className="btn btn-ghost normal-case text-xl"></Link> */}
                    <Link to='register' className="btn btn-ghost normal-case text-lg font-medium">Register</Link>
                    <Link to='login' className="btn btn-ghost normal-case text-lg font-medium">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;