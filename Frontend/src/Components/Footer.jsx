import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-v3">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Side */}
          <div className="footer-brand">
            <div className="section-num">06 // THE FINALE</div>
            <h2 className="footer-logo">PRASAD.M</h2>
            <p className="footer-tagline">
              Architecting the future of web through <br/> 
              precision engineering and creative vision.
            </p>
          </div>

          {/* Contact Links */}
          <div className="footer-links">
            <div className="link-group">
              <h4>EXPLORE</h4>
              <a href="#about">About Me</a>
              <a href="#work">Portfolio</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="link-group">
              <h4>SOCIALS</h4>
              <a href="https://www.linkedin.com/in/prasad-malvi/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/PrasadMalvi" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.instagram.com/malviprasad/" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://www.facebook.com/prasad.malvi.50/" target="_blank" rel="noreferrer">Facebook</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="copyright">
            ALL © COPYRIGHT RESERVED FOR MR. PRASAD MALVI FROM BANGALORE
          </div>
          <div className="location">
            {currentYear} // BANGALORE, INDIA
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
