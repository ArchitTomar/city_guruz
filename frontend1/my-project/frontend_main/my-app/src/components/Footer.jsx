import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>
            Stay updated with the latest travel destinations, offers, and tips
            directly in your inbox.
          </h3>
          <div className="email-input">
            <input type="email" placeholder="Enter your email address" />
            <button>&rarr;</button>
          </div>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              aria-label="Visit our Facebook page"
              rel="noopener noreferrer"
              className="fa fa-facebook"
            ></a>
            <a
              href="https://instagram.com"
              target="_blank"
              aria-label="Visit our Facebook page"
              rel="noopener noreferrer"
              className="fa fa-instagram"
            ></a>
            <a
              href="https://twitter.com"
              target="_blank"
              aria-label="Visit our Facebook page"
              rel="noopener noreferrer"
              className="fa fa-twitter"
            ></a>
            <a
              href="https://youtube.com"
              target="_blank"
              aria-label="Visit our Facebook page"
              rel="noopener noreferrer"
              className="fa fa-youtube"
            ></a>
          </div>
        </div>

        {/* Center Section */}
        <div className="footer-center">
          <ul className="menu-list">
            <li className="menu-title">Menu</li>
            <li>Destinations</li>
            <li>Travel Packages</li>
            <li>About Us</li>
            <li>Travel Blog</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <ul className="support-list">
            <li className="menu-title">Support</li>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
