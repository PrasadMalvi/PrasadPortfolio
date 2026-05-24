import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaMusic } from 'react-icons/fa';
import './Skills.css';

const skillGroups = [
  {
    title: "FRONTEND ARCHITECTURE",
    skills: ["React.js", "Next.js", "React Native", "TypeScript", "Redux", "Tailwind CSS"],
    span: "large"
  },
  {
    title: "BACKEND // LOGIC",
    skills: ["Node.js", "Express.js", "Socket.IO", "REST APIs", "JWT Auth"],
    span: "medium"
  },
  {
    title: "DATABASE SYSTEM",
    skills: ["MongoDB", "PostgreSQL", "SQL // NoSQL"],
    span: "small"
  },
  {
    title: "VIBE CODING",
    isVibe: true,
    span: "small"
  },
  {
    title: "CLOUD & DEVOPS",
    skills: ["AWS // EC2 // S3", "Docker", "CI/CD", "Vercel"],
    span: "medium"
  },
  {
    title: "SOFTWARE TESTING",
    skills: ["Selenium", "TestNG", "Postman", "SDLC / STLC", "Manual & Automation"],
    span: "large"
  },
  {
    title: "TOOLS",
    skills: ["Git/GitHub", "Jira", "NPM", "Agile"],
    span: "small"
  }
];

function Skills() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const xBg = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section id="skills" data-label="Skills" className="skills-v3" ref={containerRef}>
      <motion.div 
        className="bg-text-layer bg-text-outline"
        style={{ x: xBg, top: '30%' }}
      >
        COMPETENCIES // SKILLS
      </motion.div>
      <div className="container">
        <div className="skills-header">
          <span className="section-num">04 // COMPETENCIES</span>
          <h2 className="skills-title">TECHNICAL <br/> <span className="outline-text">POWERS</span></h2>
        </div>

        <div className="bento-grid">
          {skillGroups.map((group, idx) => (
            <motion.div 
              key={idx}
              className={`bento-item ${group.span} ${group.isVibe ? 'vibe-item' : ''}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <div className="bento-inner">
                <div className="item-header">
                  <h3 className="group-title">{group.title}</h3>
                  {!group.isVibe && (
                    <div className="status-indicator">
                      <motion.span 
                        className="pulse-dot"
                        animate={{ opacity: [1, 0.4, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <span className="status-text">ACTIVE</span>
                    </div>
                  )}
                </div>
                
                {group.isVibe ? (
                  <div className="vibe-coding-content">
                    <div className="music-bars">
                      {[...Array(5)].map((_, i) => (
                        <motion.div 
                          key={i}
                          className="bar"
                          animate={{ 
                            height: [10, 30, 15, 25, 10], 
                          }}
                          transition={{ 
                            repeat: Infinity, 
                            duration: 0.8 + (i * 0.2),
                            ease: "easeInOut" 
                          }}
                        />
                      ))}
                    </div>
                    <div className="vibe-info">
                      <FaMusic className="music-icon" />
                      <div className="track-details">
                        <span className="now-playing">NOW PLAYING</span>
                        <span className="song-title">Lofi Beats // Deep Focus</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="tags-container">
                    {group.skills.map((skill, i) => (
                      <span key={i} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
