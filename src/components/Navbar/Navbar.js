import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return(
        <nav className="site-navbar">
            <div className="site-navbar-container">
                <div className="site-brand">
                    <h1 className="site-name">FOCALPOINT</h1>
                </div>
                <div className="site-menu">
                    <ul className="menu-list">
                        <div className="menu-lg-only">
                            <li className="menu-list-item"><a href="#">Dashboard</a></li>
                            <li className="menu-list-item"><a href="#">Sign in</a></li>
                            <li className="menu-list-item"><a className="nav-sign-up-btn" href="#">Sign up</a></li>
                        </div>
                        <li className="menu-sm-only menu-list-item"><i className="fa fa-bars" href="#"></i></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
//https://www.freelogoservices.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6khvSDrRRMmRfIwXs1M3EMoAJtliIsgvFq9...k8
export default Navbar;