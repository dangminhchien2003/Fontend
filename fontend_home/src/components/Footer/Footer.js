import React from "react";
import "./Footer.css";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaSpotify,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section stay-tuned">
          <h3>STAY TUNED</h3>
          <p>herion@wolfthemes.com</p>
          <p>(485) 209-5175</p>
          <div className="social-icons">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://open.spotify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSpotify />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="footer-section logo-and-text">
          <div className="footer-logo">Herion</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed
            do eiusmod tempor incididunt ut labore et dolore
            <br /> magna aliqua.
          </p>
        </div>

        <div className="footer-section quick-links">
          <h3>QUICK LINKS</h3>
          <ul>
            <li>
              <a href="/my-account">My Account</a>
            </li>
            <li>
              <a href="/shipping-returns">Shipping & Returns</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2025 WolfThemes Records <a href="/privacy-policy">Privacy Policy</a>{" "}
          <a href="/terms-of-use">Terms of Use</a> <a href="/press">Press</a>{" "}
          <a href="/careers">Careers</a> <a href="/contact-us">Contact Us</a>{" "}
          <a href="/cookie-policy">Cookie Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
