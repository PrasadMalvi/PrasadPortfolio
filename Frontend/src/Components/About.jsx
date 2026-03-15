import React, { useState, useEffect } from "react";
import "./About.css";
import A1 from "../assets/A1.jpg";
import A2 from "../assets/A2.jpg";
import A3 from "../assets/A3.jpg";


function About() {
  const [activeTab, setActiveTab] = useState("education");

  const images = [A1, A2, A3];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section id="about">
      <div className="about-container">
        {/* Accomplishments Section */}
        {/* Left Side - Image Slider */}
        <div className="about-image">
          <img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt="About"
            className="fade-in"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="about-content">
          <h1 className="about-title">About Me</h1>
          <p className="about-description">
            Hello! I'm <span className="highlight">Prasad Malvi</span>, an MCA Graduate from Bangalore, currently working as a 
            <span className="highlight"> Software Engineer at Kerv Digital</span> specializing in 
            <span className="highlight"> Full Stack Development (MERN, React Native)</span>. I specialize in 
            building high-performance web and mobile applications with a passion for real-time applications, scalability, microservices architecture, and problem-solving.
            My expertise includes TypeScript, React, Next.js, PostgreSQL, AWS, and automated testing.
          </p>

          {/* Tabs for Skills, Education, Certificates */}
          <div className="about-tabs">
            {["education", "certificate", "training", "awards"].map((tab) => (
              <button
                key={tab}
                className={`tab-button ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {activeTab === "education" && (
              <ul>
                <li><strong>MCA (2024):</strong> Christ Academy Institute for Advanced Studies, Bangalore.</li>
                <li><strong>BCA (2022):</strong> KLE Society’s Shri Mrutyunjaya BCA College, Dharwad.</li>
                <li><strong>PU (2019):</strong> Shri Shivaji Govt College, Haliyal.</li>
              </ul>
            )}

            {activeTab === "certificate" && (
              <ul>
                <li><strong>AWS Certified Developer Associate:</strong> Udemy (Ongoing).</li>
                <li><strong>MERN Full Stack Development:</strong> Prinston Smart Engineers (Jan 2024).</li>
                <li><strong>React, NodeJS, Express & MongoDB - MERN
                  Fullstack
                  :</strong> Udemy (March 2024).</li>
                <li><strong>Hackathon Participation:</strong> Developed an AI-powered game generator frontend.</li>
              </ul>
            )}
            {activeTab === "training" && (
                <div>
                  <strong>Software Testing Trainee</strong> <span>(Jan 2025)</span>
                  <p><strong>Besant Technologies - Bangalore</strong></p>
                  <ul>
                    <li>Gained practical experience in manual testing by working with web applications in the e-commerce and travel domains.</li>
                    <li>Proficient in black-box testing techniques, including:
                      <ul>
                        <li>Boundary Value Analysis (BVA)</li>
                        <li>Equivalence Partitioning</li>
                        <li>State Transition Testing</li>
                      </ul>
                    </li>
                    <li>Focused on the practical application of:
                      <ul>
                        <li>Software Development Life Cycle (SDLC)</li>
                        <li>Software Testing Life Cycle (STLC)</li>
                        <li>Functional testing methodologies (Sanity, Smoke, Regression, Cross-browser, Compatibility, and Integration testing).</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              )}
            {activeTab === "awards" && (
              <div>
                <strong>Legend Award - Persistence Category</strong> <span>(Mar 2026)</span>
                <p><strong>Kerv Digital - Bangalore</strong></p>
                <p style={{fontSize: "0.95rem", fontStyle: "italic", marginTop: "10px", color: "#d4a5d4"}}>
                  "Prasad is an exceptional graduate engineer. He consistently delivers high-quality output and always goes above and beyond expectations. He supports all his team members without ever letting his own deliverables slip. To an outsider, he would never appear as a fresher as he operates at the level of a lead engineer. He is already a strong technology expert in the full-stack domain. I cannot express enough gratitude for the impact he has created on the project."
                </p>
                <p style={{fontSize: "0.9rem", marginTop: "8px"}}>- Naveen Kumar R (Team Lead, Kerv Digital)</p>
              </div>
            )}

          </div>
        </div>
        
      </div>
      <a href="PrasadResume2026.pdf" download className="download-cv1">
              Download CV
            </a>
    </section>
  );
}

export default About;
