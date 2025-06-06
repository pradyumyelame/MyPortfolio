// Skills.jsx
import React from 'react';
import './Skills.css';
import { FaCode, FaDatabase, FaTools, FaLaptopCode, FaPalette, FaGlobe } from 'react-icons/fa';
import { SiFrontendmentor } from 'react-icons/si';

const Section = ({ icon, title, file, skills, iconColor }) => (
  <div className="skills-section">
    <div className="skills-window">
      <div className="skills-window-header">
        <div className="dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <span className="filename">{file}</span>
        <div className="status-indicator"></div>
      </div>
      <div className="skills-content">
        <p className="command">$ cat {file.split('.')[0]}</p>
        <div className="section-title">
          <div className={`icon-container ${iconColor}`}>
            {icon}
          </div>
          <div className="title-info">
            <h2>{title}</h2>
            <p>[{skills.length} technologies loaded]</p>
          </div>
        </div>
        <p className="command">$ ls -la technologies/</p>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="main-window">
        <div className="header-bar">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="main-command">
          <p>$ analyze --skills --expertise</p>
          <h1>TECHNICAL_SKILLS</h1>
          <p className="comment">// Continuously learning and evolving</p>
        </div>
      </div>

      <Section
        icon={<SiFrontendmentor />}
        title="FRONTEND"
        file="frontend_skills.json"
        iconColor="frontend-icon"
        skills={["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "TypeScript"]}
      />

      <Section
        icon={<FaDatabase />}
        title="BACKEND"
        file="backend_skills.json"
        iconColor="backend-icon"
        skills={["Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs", "JSON", "jwt"]}
      />

      <Section
        icon={<FaTools />}
        title="TOOLS & TECHNOLOGIES"
        file="tools_technologies_skills.json"
        iconColor="tools-icon"
        skills={["Git & GitHub", "VS Code", "Figma", "Photoshop", "Postman", "Chrome DevTools"]}
      />

      <Section
        icon={<FaLaptopCode />}
        title="PROGRAMMING"
        file="programming_skills.json"
        iconColor="programming-icon"
        skills={["C++", "C", "Java", "JavaScript","SQL", "Data Structures & Algorithms"]}
      />

      <Section
        icon={<FaPalette />}
        title="COURSEWORK"
        file="course.json"
        iconColor="design-icon"
        skills={["Data Structures", "Algorithms", "Operating Systems", "Database Management Systems", "Computer Networks", "Software Engineering", "Web Development","OOP's"]}
      />

      {/* <Section
        icon={<FaGlobe />}
        title="WEB TECHNOLOGIES"
        file="web_technologies_skills.json"
        iconColor="web-icon"
        skills={["Responsive Design", "PWA", "SEO", "Web Performance", "Accessibility", "Browser APIs", "WebSockets", "Service Workers"]}
      /> */}
    </div>
  );
};

export default Skills;