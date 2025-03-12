import React from "react";
import "./Skills.css";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", icon: "fa-brands fa-html5" },
        { name: "CSS3", icon: "fa-brands fa-css3" },
        { name: "JavaScript", icon: "fa-brands fa-js" },
        { name: "React.js", icon: "fa-brands fa-react" },
        { name: "React Native", icon: "fa-brands fa-react" },
        { name: "Redux", icon: "fa-solid fa-chart-line" },
        { name: "Google Maps API", icon: "fa-solid fa-map" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: "fa-brands fa-node-js" },
        { name: "Express.js", icon: "fa-solid fa-server" },
        { name: "REST API", icon: "fa-solid fa-network-wired" },
        { name: "Socket.IO", icon: "fa-solid fa-plug" },
        { name: "JWT Authentication", icon: "fa-solid fa-key" },
      ],
    },
    {
      title: "Database Management",
      skills: [
        { name: "MongoDB", icon: "fa-solid fa-database" },
        { name: "SQL", icon: "fa-solid fa-database" },
        { name: "NoSQL", icon: "fa-solid fa-database" },
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS (EC2, S3, Lambda)", icon: "fa-brands fa-aws" },
        { name: "CI/CD", icon: "fa-solid fa-code-branch" },
        { name: "Docker", icon: "fa-brands fa-docker" },
      ],
    },
    {
      title: "Software Testing",
      skills: [
        { name: "Selenium", icon: "fa-solid fa-vial" },
        { name: "TestNG", icon: "fa-solid fa-flask" },
        { name: "Postman (API Testing)", icon: "fa-solid fa-check" },
        { name: "Automation Testing", icon: "fa-solid fa-robot" },
      ],
    },
    {
      title: "Other Tools & Methodologies",
      skills: [
        { name: "Git/GitHub", icon: "fa-brands fa-git-alt" },
        { name: "NPM", icon: "fa-solid fa-box-open" },
        { name: "Jira", icon: "fa-brands fa-jira" },
        { name: "Agile & SDLC", icon: "fa-solid fa-project-diagram" },
      ],
    },
  ];

  return (
    <section id="skills">
      <div className="skills-container">
        <h1 className="skills-title">Skills and Experience</h1>
        {skillCategories.map((category, index) => (
          <div key={index} className="skills-category">
            <h2 className="category-title">{category.title}</h2>
            <div className="skills-grid">
              {category.skills.map((skill, i) => (
                <div key={i} className="skill-card">
                  <i className={`skill-icon ${skill.icon}`}></i>
                  <h3 className="skill-name">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
