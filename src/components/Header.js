import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/signin">Signin</Link>
        <Link to="/signout">Signout</Link>
        <Link to="/message">Message</Link>
    </div>
        
    )
}