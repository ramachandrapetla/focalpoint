import React from 'react';
import logo from '../../logo.png'
import './Footer.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-main-content">
                <div className="footer-left">
                    <img src={logo} alt="footer-logo" />
                    <p>
                        Blogging is to writing what extreme sports are to athletics: more free-form, more accident-prone, less formal, more alive. 
                        It is, in many ways, writing out loud
                    </p>
                </div>
                <div className="footer-right">
                    <div className="footer-nav">
                        <h3>Categories</h3>
                        <ul>
                            <li>Travel</li>
                            <li>Nature</li>
                            <li>Food</li>
                            <li>Photography</li>
                            <li>Technology</li>
                            <li>Artd and Crafts</li>
                        </ul>
                    </div>
                    <div className="footer-social">
                        <ul>
                            <li><i className="fab fa-facebook-square"></i></li>
                            <li><i className="fab fa-instagram-square"></i></li>
                            <li><i className="fab fa-whatsapp-square"></i></li>
                            <li><i className="fab fa-google-plus-square"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-site-credits">
                <p>Created and maintained by Ramachandra Petla</p>
            </div>
            
        </footer>
    )
}

export default Footer;