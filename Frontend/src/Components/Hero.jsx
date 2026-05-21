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
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="pre-title"
            >
              SOFTWARE ENGINEER @ KERV DIGITAL
            </motion.h2>
            
            <motion.h1 
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="main-display"
            >
              PRASAD <span className="outline-text">MALVI</span>
            </motion.h1>

            <motion.p className="hero-description">
              Currently engineering enterprise-grade solutions at <span className="text-white">Kerv Digital</span>. 
              Bridging the gap between monolithic stability and <span className="text-white">freelance agility</span> 
              through MERN and React Native architectures.
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

            <div className="status-badge">
              <div className="pulse-dot"></div>
              <span>Open for gigs</span>
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
            <span className="card-tag">ENGINEER</span>
            <span className="card-serial">PM-2025</span>
          </div>
          <div className="card-content">
            <div className="code-block">
              <span>const dev = { "{" }</span>
              <span className="indent">name: 'Prasad',</span>
              <span className="indent">role: 'Software Engineer'</span>
              <span>{ "}" };</span>
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
