import React from 'react';
import './Navbar.css';
import logo from '../../logo.png'

const Navbar = () => {
    return(
        <nav className="site-navbar">
            <div className="site-navbar-container">
                <div className="site-brand">
                    {/* <img src={logo} alt="Petla's Blog"/> */}
                    <h1 className="site-name">FOCALPOINT</h1>
                </div>
                <div className="site-menu">
                    <ul className="menu-list">
                        <li className="menu-list-item"><a href="#">Dashboard</a></li>
                        <li className="menu-list-item"><a href="#">Sign in</a></li>
                        <li className="menu-list-item"><a className="nav-sign-up-btn" href="#">Sign up</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
//https://www.freelogoservices.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6khvSDrRRMmRfIwXs1M3EMoAJtliIsgvFq9...k8
export default Navbar;