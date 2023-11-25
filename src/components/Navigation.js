import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/upload">Upload Document</Link>
                </li>
                <li>
                    <Link to="/results">Results</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
