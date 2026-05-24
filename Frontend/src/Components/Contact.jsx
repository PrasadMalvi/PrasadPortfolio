import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaDownload } from 'react-icons/fa';
import './Contact.css';
import API from '../api';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await API.post('/contact/submit', formData);
      if (response.status === 201) {
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: '', email: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus(prev => ({ ...prev, submitted: false })), 5000);
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setStatus({ 
        submitting: false, 
        submitted: false, 
        error: err.response?.data?.error || 'Something went wrong. Please try again later.' 
      });
    }
  };

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
            <form className="contact-form-v3" onSubmit={handleSubmit}>
              <div className="input-row">
                <div className="input-field">
                  <label htmlFor="name">YOUR NAME</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name" 
                    placeholder="Your Name Pal" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="email">EMAIL ADDRESS</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email" 
                    placeholder="your.email Peeps" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="input-field">
                <label htmlFor="message">YOUR MESSAGE</label>
                <textarea 
                  id="message"
                  name="message" 
                  rows="5" 
                  placeholder="Tell me how can we collab on..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {status.error && <p className="status-message error">{status.error}</p>}
              {status.submitted && <p className="status-message success">Message sent successfully! ✨</p>}

              <button 
                type="submit" 
                className="form-submit-btn" 
                disabled={status.submitting}
              >
                {status.submitting ? 'SENDING...' : 'SEND MESSAGE'}
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
