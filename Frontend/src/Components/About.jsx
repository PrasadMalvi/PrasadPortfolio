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
            Hello! I'm <span className="highlight">Prasad Malvi</span>, an MCA Graduate from Bangalore, working as an 
            <span className="highlight"> SDE-1 Full Stack Developer (MERN, React Native)</span>. I specialize in 
            building high-performance web and mobile applications with a passion for real-time applications, scalability, and problem-solving.
            My expertise includes JavaScript, AWS, and software testing.
          </p>

          {/* Tabs for Skills, Education, Certificates */}
          <div className="about-tabs">
            {["education", "certificate", "training"].map((tab) => (
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

          </div>
        </div>
        
      </div>
      <a href="PrasadAMalviSDE1.pdf" download className="download-cv1">
              Download CV
            </a>
    </section>
  );
}

export default About;
