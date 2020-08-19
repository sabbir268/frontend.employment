import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faLinkedinIn, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = (props) => {
    return (
        <footer>
            <div className="footer-top">
                <div className="overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="footer-item">
                                    <h3>Who We Are</h3>
                                    <p>This is Photoshop's version of Lom Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum.</p>
                                    <p>Proin akshay handge vel velit auctor aliquet. Aenean sollicitudin</p>
                                    <a href="#" className="btn btn-default">Learn More</a>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="footer-item">
                                    <h3>For Candidate</h3>
                                    <ul>
                                        <li><a href="#">Add Resume</a></li>
                                        <li><a href="#">Candidate Dashboard</a></li>
                                        <li><a href="#">Past Applications</a></li>
                                        <li><a href="#">Job Alerts</a></li>
                                        <li><a href="#">Bookmarks</a></li>
                                        <li><a href="#">My Account</a></li>
                                        <li><a href="#">My Jobs</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="footer-item">
                                    <h3>For Employers</h3>
                                    <ul>
                                        <li><a href="#">Add Resume</a></li>
                                        <li><a href="#">Candidate Dashboard</a></li>
                                        <li><a href="#">Past Applications</a></li>
                                        <li><a href="#">Job Alerts</a></li>
                                        <li><a href="#">Bookmarks</a></li>
                                        <li><a href="#">My Account</a></li>
                                        <li><a href="#">My Jobs</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="footer-item">
                                    <h3>Information</h3>
                                    <ul>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Terms & Conditions</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Job Alerts</a></li>
                                        <li><a href="#">Sitemap</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">FAQs</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <p>Copyright© 2020 All Right Reserved</p>
                        </div>
                        <div className="col-sm-6">
                            <ul className="social-list">
                                <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faGoogle} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faYoutubeSquare} /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;