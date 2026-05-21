import React from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaDownload } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" data-label="Contact" className="contact-v3">
      <div className="container">
        <div className="section-num">05 // THE CONNECTION</div>
        
        <div className="contact-layout">
          {/* Left: Huge Heading & Intro */}
          <div className="contact-info">
            <h2 className="contact-main-title">STAY IN <br/> <span className="outline-text">THE LOOP.</span></h2>
            <p className="contact-description">
              Whether you have a question, a project idea, or just want to say hi, 
              I'm always open to new connections and collaborations.
            </p>

            <div className="contact-methods">
              <a href="mailto:Prasadmalvi23@gmail.com" className="method-item">
                <div className="method-icon"><FaPaperPlane /></div>
                <div className="method-text">
                  <span>EMAIL ME</span>
                  <strong>Prasadmalvi23@gmail.com</strong>
                </div>
              </a>
              <a href="tel:+917996592596" className="method-item">
                <div className="method-icon"><FaPhone /></div>
                <div className="method-text">
                  <span>CALL ME</span>
                  <strong>+91 79965 92596</strong>
                </div>
              </a>
              <div className="method-item">
                <div className="method-icon"><FaMapMarkerAlt /></div>
                <div className="method-text">
                  <span>BASED IN</span>
                  <strong>Bangalore, Karnataka</strong>
                </div>
              </div>
            </div>

            <div className="contact-socials-row">
              <a href="https://www.linkedin.com/in/prasad-malvi" target="_blank" rel="noreferrer" className="social-icon-link"><FaLinkedin /></a>
              <a href="https://github.com/PrasadMalvi" target="_blank" rel="noreferrer" className="social-icon-link"><FaGithub /></a>
              <a href="https://www.instagram.com/malviprasad/" target="_blank" rel="noreferrer" className="social-icon-link"><FaInstagram /></a>
              <a href="https://www.facebook.com/prasad.malvi.50/" target="_blank" rel="noreferrer" className="social-icon-link"><FaFacebook /></a>
            </div>

            <a href="/PrasadResume2026.pdf" download className="cv-download-btn">
              <FaDownload /> DOWNLOAD CV
            </a>
          </div>

          {/* Right: Architectural Form */}
          <div className="contact-form-container">
            <form className="contact-form-v3">
              <div className="input-row">
                <div className="input-field">
                  <label>YOUR NAME</label>
                  <input type="text" placeholder="Your Name Pal" />
                </div>
                <div className="input-field">
                  <label>EMAIL ADDRESS</label>
                  <input type="email" placeholder="your.email Peeps" />
                </div>
              </div>
              <div className="input-field">
                <label>YOUR MESSAGE</label>
                <textarea rows="5" placeholder="Tell me how can we collab on..."></textarea>
              </div>
              <button type="submit" className="form-submit-btn">
                SEND MESSAGE
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4.16666 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
