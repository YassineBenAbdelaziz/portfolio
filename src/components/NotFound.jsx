import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='not-found'>
            <h1>404 - Page Not Found</h1>
            <p>Oops ! The page you are looking for does not exist.</p>
            <p>Back to <Link to="/" style={{textDecoration : 'none', color : 'blue'}}>Home </Link>?</p>
        </div>
    );
};

export default NotFound;
