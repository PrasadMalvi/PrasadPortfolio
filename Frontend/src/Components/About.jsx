import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import A1 from '../assets/A1.jpg';
import A2 from '../assets/A2.jpg';
import A3 from '../assets/A3.jpg';
import './About.css';

function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const xBg = useTransform(scrollYProgress, [0, 1], ["-10%", "20%"]);

  return (
    <section id="about" data-label="About" className="about-v3" ref={containerRef}>
      <motion.div 
        className="bg-text-layer bg-text-outline"
        style={{ x: xBg, top: '20%' }}
      >
        IDENTITY // ARCHIVE
      </motion.div>
      <div className="container">
        <div className="about-layout">
          
          <div className="about-sticky-side">
            <div className="section-num">02 // ARCHIVE.IDENTITY</div>
            <h2 className="about-title">CRAFTING <br/> THE <span className="outline-text">DIGITAL SELF</span></h2>
            
            <div className="profile-grid-v3">
              <motion.div 
                className="profile-frame-wrap large"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
              >
                <img src={A1} alt="Prasad Malvi Main" className="profile-img-v3" />
              </motion.div>
              <motion.div 
                className="profile-frame-wrap small"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <img src={A2} alt="Prasad Malvi Detail" className="profile-img-v3" />
              </motion.div>
              <motion.div 
                className="profile-frame-wrap small"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <img src={A3} alt="Prasad Malvi Snapshot" className="profile-img-v3" />
              </motion.div>
            </div>

            <div className="experience-summary">
              <div className="summary-item">
                <span className="val">1YR+</span>
                <span className="lbl">EXPERIENCE</span>
              </div>
              <div className="summary-item">
                <span className="val">AWARD</span>
                <span className="lbl">FUTURE LEADER</span>
              </div>
            </div>
          </div>

          <div className="about-content-side">
            <div className="content-block">
              <span className="block-label">CORE PHILOSOPHY</span>
              <p className="description">
                Currently making an impact at <strong className="text-white">Kerv Digital</strong> as a Software Engineer. 
                I focus on translating complex business requirements into fluid, efficient digital experiences while 
                maintaining high standards for code quality and user performance.
              </p>
              <p className="description">
                Recognized as a <strong className="text-white">Future Leader</strong> for my contributions and growth, 
                I combine my professional experience with my <strong className="text-white">freelance work</strong> to 
                deliver scalable solutions across web and mobile platforms.
              </p>
            </div>

            <div className="content-block">
              <span className="block-label">PROFESSIONAL FOOTPRINT</span>
              
              <div className="archive-item">
                <div className="year">PRESENT</div>
                <div className="details">
                  <h4>Software Engineer // Kerv Digital</h4>
                  <p>Architecting enterprise web solutions and optimizing cloud-native delivery pipelines.</p>
                </div>
              </div>

              <div className="archive-item">
                <div className="year">2024</div>
                <div className="details">
                  <h4>Full Stack Developer // Freelance</h4>
                  <p>Partnering with global startups to build scalable MVP architectures and mobile ecosystems.</p>
                </div>
              </div>
            </div>

            <div className="content-block">
              <span className="block-label">ACADEMIC TIMELINE</span>
              
              <div className="archive-item">
                <div className="year">2024</div>
                <div className="details">
                  <h4>MCA // Masters of Computer Applications</h4>
                  <p>Christ Academy Institute for Advanced Studies, Bangalore</p>
                </div>
              </div>

              <div className="archive-item">
                <div className="year">2022</div>
                <div className="details">
                  <h4>BCA // Bachelors of Computer Applications</h4>
                  <p>KLE Society’s Shri Mrutyunjaya BCA College, Dharwad</p>
                </div>
              </div>

              <div className="archive-item">
                <div className="year">2019</div>
                <div className="details">
                  <h4>PU // Pre-University Foundation</h4>
                  <p>Shri Shivaji Govt College, Haliyal</p>
                </div>
              </div>
            </div>

            <div className="content-block">
              <span className="block-label">PROFESSIONAL SPECIALIZATION</span>
              
              <div className="archive-item">
                <div className="year">HONORS</div>
                <div className="details">
                  <h4>Future Leader Award</h4>
                  <p>Recognized at Kerv Digital for exceptional contribution and leadership potential.</p>
                </div>
              </div>

              <div className="archive-item">
                <div className="year">FULL</div>
                <div className="details">
                  <h4>Full Stack Developer</h4>
                  <p>Building high-performance applications using the MERN stack and React Native.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
