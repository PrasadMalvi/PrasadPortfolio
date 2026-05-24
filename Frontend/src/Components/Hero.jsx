import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaDownload } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Hero.css';

function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.9]);
  const xBg = useTransform(scrollY, [0, 1000], ["0%", "-30%"]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 30;
      const y = (clientY / window.innerHeight - 0.5) * 30;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socials = [
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/prasad-malvi/", label: "LI" },
    { icon: <FaGithub />, url: "https://github.com/PrasadMalvi", label: "GH" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/malviprasad/", label: "IG" },
    { icon: <FaFacebook />, url: "https://www.facebook.com/prasad.malvi.50/", label: "FB" },
  ];

  const firstName = "PRASAD".split("");
  const lastName = "MALVI".split("");

  return (
    <section id="hero" data-label="Home" className="hero-section">
      <motion.div 
        className="bg-text-layer"
        style={{ x: xBg, top: '15%', opacity: 0.05 }}
      >
        ARCHITECT // 2025
      </motion.div>
      {/* Side Socials */}
      <div className="hero-socials-side">
        {socials.map((social, i) => (
          <a key={i} href={social.url} target="_blank" rel="noreferrer" className="social-side-link">
            {social.icon}
          </a>
        ))}
        <div className="side-line"></div>
      </div>

      <motion.div 
        className="container"
        style={{ opacity, scale }}
      >
        <div className="hero-core">
          <div className="section-num">01 // INTRODUCTION</div>

          <div className="hero-headlines">
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="pre-title"
            >
              SOFTWARE ENGINEER @ KERV DIGITAL
            </motion.h2>
            
            <h1 className="main-display">
              <span className="name-row">
                {firstName.map((char, i) => (
                  <motion.span 
                    key={i}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + i * 0.05, duration: 0.5 }}
                    className="char"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              <span className="name-row">
                {lastName.map((char, i) => (
                  <motion.span 
                    key={i}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 + i * 0.05, duration: 0.5 }}
                    className="char outline-text"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="hero-description"
            >
              Currently engineering enterprise-grade solutions at <span className="text-white">Kerv Digital</span>. 
              Bridging the gap between monolithic stability and <span className="text-white">architectural precision</span> 
              through MERN and React Native ecosystems.
            </motion.p>
          </div>

          <div className="hero-footer">
            <div className="cta-group">
              <a href="/PrasadResume2026.pdf" download className="btn-primary">
                Download CV
                <FaDownload style={{ marginLeft: '10px' }} />
              </a>
              <a href="#contact" className="btn-secondary">Get in touch</a>
            </div>

            <div className="status-badge-v3">
              <div className="location-info">
                <span className="city">BANGALORE, IN</span>
                <span className="coords">12.9716° N, 77.5946° E</span>
              </div>
              <div className="dot-group">
                <div className="pulse-dot"></div>
                <span className="live-text">AVAILABLE</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="hero-visual"
        style={{ 
          rotateX: -mousePos.y,
          rotateY: mousePos.x,
          transformStyle: 'preserve-3d',
          opacity
        }}
      >
        <div className="visual-card">
          <div className="card-glare"></div>
          <div className="card-top">
            <span className="card-tag">LATEST_LOG</span>
            <span className="card-serial">0x2F4A</span>
          </div>
          <div className="card-content">
            <div className="log-line">
              <span className="timestamp">12:44:02.1</span>
              <span className="msg">sys.init_success</span>
            </div>
            <div className="log-line">
              <span className="timestamp">12:44:02.4</span>
              <span className="msg">auth.handshake: OK</span>
            </div>
            <div className="log-line accent">
              <span className="timestamp">12:44:03.0</span>
              <span className="msg">vibe.coding_mode_active</span>
            </div>
          </div>
          <div className="card-footer">
            <div className="data-bars">
              {[...Array(8)].map((_, i) => (
                <motion.div 
                  key={i} 
                  className="data-bar"
                  animate={{ height: [4, 12, 6, 14, 4] }}
                  transition={{ repeat: Infinity, duration: 1 + i * 0.1 }}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="hero-scroll-indicator">
        <span>SCROLL TO DISCOVER</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

export default Hero;
