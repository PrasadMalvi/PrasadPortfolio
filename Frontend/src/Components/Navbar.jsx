import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav-v3 ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-dot"></span>
          PRASAD.M
        </div>
        
        <div className="nav-links">
          <a href="#about" className="nav-item">About</a>
          <a href="#skills" className="nav-item">Expertise</a>
          <a href="#work" className="nav-item">Work</a>
          <a href="#contact" className="nav-contact">LET'S TALK</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
