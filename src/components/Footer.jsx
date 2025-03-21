import React from "react";
import "../components/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <h2>SHOP.CO</h2>
                        <p>
                            We have clothes that suit your style and which you're proud to
                            wear. From women to men.
                        </p>
                        <div className="social-icons">
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-github"></i></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <div>
                            <h3>COMPANY</h3>
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Works</a></li>
                                <li><a href="#">Career</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3>HELP</h3>
                            <ul>
                                <li><a href="#">Customer Support</a></li>
                                <li><a href="#">Delivery Details</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3>FAQ</h3>
                            <ul>
                                <li><a href="#">Account</a></li>
                                <li><a href="#">Manage Deliveries</a></li>
                                <li><a href="#">Orders</a></li>
                                <li><a href="#">Payments</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3>RESOURCES</h3>
                            <ul>
                                <li><a href="#">Free eBooks</a></li>
                                <li><a href="#">Development Tutorial</a></li>
                                <li><a href="#">How-to Blog</a></li>
                                <li><a href="#">YouTube Playlist</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>Shop.co © 2000-2023, All Rights Reserved</p>
                    <div className="payment-methods">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="MasterCard" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Apple_Pay_logo.svg" alt="Apple Pay" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Google_Pay_Logo.svg" alt="Google Pay" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
