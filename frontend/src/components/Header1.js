import React from 'react';
import {Link} from 'react-router-dom';

export default function Header1(){
return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/users">Users</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/authentication">Authentication</Link>
                </li>
            </ul>
        </nav>
    </div>
);
}