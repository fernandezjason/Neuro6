import React from 'react';
import { Link } from 'react-router-dom';
import './UserNavBar.css';

const NavBar = (props) => {
    return (
        <div className = "header">
            {/* Logo */}
            <Link className = "nav-title" to="/">
                <img className = "nav-logo" src={ "/NeurosurgeryLogo.gif" } alt="Neurosurgery logo" />
            </Link>

            {/* Page Links */}
            <div className = "nav-items">
                <Link className = "nav-link" to='#'> {props.user} </Link>
                <Link className = "nav-link" to='/Home'>Log Out</Link>
            </div>

        </div>
    )
};
export default NavBar;