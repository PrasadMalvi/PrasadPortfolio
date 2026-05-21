import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './Work.css';

const projectsList = [
  {
    id: "01",
    title: "HOME CARE",
    subtitle: "Medical Service Hub",
    category: "NEXT.JS // TYPESCRIPT",
    year: "2024",
    role: "Frontend Architect",
    desc: "Automated service portal for nursing institutions, streamlining patient-staff connections via serverless forms.",
    features: ["Next.js App Router", "Serverless Integration", "SEO Optimized Architecture"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel SDK"],
    link: "https://github.com/PrasadMalvi/home-care",
    animation: "https://lottie.host/159ee75c-5131-4329-a7a0-fb634eb6348b/sF41aDgllz.lottie"
  },
  {
    id: "02",
    title: "LUVIO",
    subtitle: "Real-Time Dating App",
    category: "MERN // SOCKET.IO",
    year: "2024",
    role: "Full Stack Developer",
    desc: "A high-performance dating platform with real-time messaging, swipe mechanics, and secure profile customization.",
    features: ["Real-time Socket.IO Messaging", "Swipe-to-Match Algorithm", "JWT Authentication"],
    tech: ["React Native", "Node.js", "MongoDB", "Express"],
    link: "https://github.com/PrasadMalvi/WhatsLeft-Then-swipe-right",
    animation: "https://lottie.host/edf3a196-6c8a-49f8-ba9b-5c09742ad797/wL4xbZxkA4.lottie"
  },
  {
    id: "03",
    title: "PARKMATE",
    subtitle: "Smart Parking App",
    category: "MERN // REACT NATIVE",
    year: "2024",
    role: "Lead Developer",
    desc: "Mobile-first parking solution with live spot availability, JWT-secured booking, and real-time navigation.",
    features: ["Live Spot Tracking", "In-App Booking System", "Geofencing Integration"],
    tech: ["React Native", "Google Maps API", "Mongoose", "Node.js"],
    link: "https://github.com/PrasadMalvi/ParkMate-Parking-App",
    animation: "https://lottie.host/7e3181af-9aa6-4583-80ed-14d00993865f/uke6AuQ0nH.lottie"
  },
  {
    id: "04",
    title: "GLOWNIUS",
    subtitle: "Skincare E-commerce",
    category: "MERN // NO-SQL",
    year: "2023",
    role: "Full Stack Engineer",
    desc: "Full-scale skincare shop architecture focusing on checkout performance and rich product asset management.",
    features: ["Dynamic Checkout Flow", "Cloudinary Image Hosting", "Admin Dashboard"],
    tech: ["React", "Redux Toolkit", "Stripe API", "MongoDB"],
    link: "https://github.com/PrasadMalvi/SkinCare",
    animation: "https://lottie.host/b8fd9cc7-049f-4f07-a0e9-537ccce5ea76/9zxK68KYOh.lottie"
  },
  {
    id: "05",
    title: "TEACHHIRE.COM",
    subtitle: "Recruitment Portal",
    category: "REACT // NODE.JS",
    year: "2023",
    role: "Lead Developer",
    desc: "A centralized platform for educational hiring, managing recruitment workflows for institutions at scale.",
    features: ["Job Board Logic", "Candidate Dashboard", "Application Tracking"],
    tech: ["React", "Express", "PostgreSQL", "Material UI"],
    link: "https://github.com/PrasadMalvi/Teacher-Recruitment-Platform",
    animation: "https://lottie.host/f0a87386-0572-48c3-a91b-0661e0d5f5fc/AbciBhJGGF.lottie"
  },
  {
    id: "06",
    title: "PRASAD MALVI",
    subtitle: "Brand Archive",
    category: "REACT // FRAMER",
    year: "2025",
    role: "Design Engineer",
    desc: "This architectural portfolio, designed to showcase deep technical competencies through cinematic motion art.",
    features: ["Cinematic Motion Design", "Architectural UI System", "Bento Grid Competencies"],
    tech: ["React 19", "Framer Motion", "CSS Mesh", "Vite"],
    link: "https://github.com/PrasadMalvi/PrasadPortfolio",
    animation: "https://lottie.host/c673ce16-3b75-4f2f-a7ee-525e1d3b7a8c/FYPXs8Xfvv.lottie"
  }
];

function Work() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const xBg = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section id="work" data-label="Work" className="work-v3" ref={containerRef}>
      <motion.div 
        className="bg-text-layer"
        style={{ x: xBg, top: '40%' }}
      >
        PORTFOLIO.2025
      </motion.div>
      <div className="container">
        <div className="work-header">
          <span className="section-num">03 // SELECTED WORKS</span>
          <h2 className="work-title">SELECTED <br/> <span className="outline-text">PROJECTS</span></h2>
        </div>

        <div className="projects-grid">
          {projectsList.map((proj, idx) => (
            <motion.div 
              key={proj.id}
              className={`project-card-v3 ${idx % 2 === 0 ? 'card-left' : 'card-right'}`}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="project-media">
                <div className="media-overlay"></div>
                <div className="media-num">{proj.id}</div>
                
                {/* Lottie Animation Layer */}
                <div className="project-lottie-container">
                  <DotLottieReact
                    src={proj.animation}
                    loop
                    autoplay
                  />
                </div>

                <div className="project-meta-corner">
                  <span>{proj.year}</span>
                  <span>{proj.role}</span>
                </div>
              </div>

              <div className="project-info">
                <span className="project-category">{proj.category}</span>
                <h3 className="project-name">
                  {proj.title} <span className="subtitle">// {proj.subtitle}</span>
                </h3>
                <p className="project-desc">{proj.desc}</p>
                
                <div className="project-details">
                  <motion.div 
                    className="detail-col"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="detail-label">KEY FEATURES</span>
                    <ul>
                      {proj.features.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                  </motion.div>
                  <motion.div 
                    className="detail-col"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <span className="detail-label">TECH STACK</span>
                    <div className="mini-tags">
                      {proj.tech.map((t, i) => <span key={i} className="mini-tag">{t}</span>)}
                    </div>
                  </motion.div>
                </div>

                <motion.a 
                  href={proj.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="project-link"
                  whileHover={{ x: 10 }}
                >
                  VIEW CASE STUDY <span>→</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
