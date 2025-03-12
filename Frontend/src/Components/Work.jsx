import React from "react";
import "./Work.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const projects = [
  {
    title: "SwipeMate",
    subTitle:"Real-Time Dating App",
    techStack: "MERN, React Native, Socket.IO",
    description:
      "A modern dating app with real-time messaging, swipe-based matching, and profile customization.",
    animationSrc: "https://lottie.host/edf3a196-6c8a-49f8-ba9b-5c09742ad797/wL4xbZxkA4.lottie",
    icon: "fa-solid fa-heart",
    github: "https://github.com/PrasadMalvi/SwipeMate",
  },
  {
    title: "ParkMate ",
    subTitle:"Smart Parking Solution App",
    techStack: "MERN, JWT, React Native",
    description:
      "A parking solution app with real-time spot availability, booking, and authentication.",
    animationSrc: "https://lottie.host/7e3181af-9aa6-4583-80ed-14d00993865f/uke6AuQ0nH.lottie",
    icon: "fa-solid fa-car",
    github: "https://github.com/PrasadMalvi/ParkMate",
  },
  {
    title: "GLOWNIUS",
    subTitle:"Skincare E-commerce Web Application",
    techStack: "MERN, Mongoose, Multer",
    description:
      "A skincare e-commerce platform with authentication, product listings, and checkout system.",
    animationSrc: "https://lottie.host/b8fd9cc7-049f-4f07-a0e9-537ccce5ea76/9zxK68KYOh.lottie",
    icon: "fa-solid fa-shopping-cart",
    github: "https://github.com/PrasadMalvi/GLOWNIUS",
  },
  {
    title: "TEACHHIRE.COM",
    subTitle:"Teacher Hiring Web Application",
    techStack: "React, Node.js, Express",
    description:
      "A web application streamlining the teacher hiring process for educational institutions.",
    animationSrc: "https://lottie.host/f0a87386-0572-48c3-a91b-0661e0d5f5fc/AbciBhJGGF.lottie",
    icon: "fa-brands fa-hire-a-helper",
    github: "https://github.com/PrasadMalvi/TEACHHIRE.COM",
  },
  {
    title: "Prasad Malvi",
    subTitle:"Portfolio Web Application",
    techStack: "React, Node.js, Express",
    description:
      "A personal portfolio showcasing projects and skills in web development.",
    animationSrc: "https://lottie.host/c673ce16-3b75-4f2f-a7ee-525e1d3b7a8c/FYPXs8Xfvv.lottie",
    icon: "fa-brands fa-hire-a-helper",
    github: "https://github.com/PrasadMalvi/TEACHHIRE.COM",
  },
];

function Work() {
  return (
    <section id="work">
      <div className="container">
        <h1 className="section-title">Portfolio</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <DotLottieReact
                  src={project.animationSrc}
                  loop
                  autoplay
                  className="project-animation"
                />
                <div className="project-hover-content">
                  <p className="project-description">{project.description}</p>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    GitHub <i className="fa-brands fa-github"></i>
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h2 className="project-title">{project.title}</h2>
                <h2 className="project-subTitle">{project.subTitle}</h2>
                <p className="tech-stack">{project.techStack}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
