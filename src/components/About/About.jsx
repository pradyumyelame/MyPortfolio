// src/components/About.jsx
import React from 'react';
import './About.css';
import { FaGraduationCap, FaLaptopCode, FaBullseye, FaHeart, FaBook, FaAward, FaMapMarkerAlt } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-container">
      {/* About Me Section - Centered */}
      <div className="about-section">
        <div className="terminal-box about-terminal">
          <div className="terminal-header">
            <div className="terminal-controls">
              <span className="control red"></span>
              <span className="control yellow"></span>
              <span className="control green"></span>
            </div>
            <span className="terminal-title">about.exe</span>
          </div>
          <div className="terminal-content">
            <p className="command">$ cat about_me.txt</p>
            <h1 className="section-title">ABOUT<span className="highlight">_ME</span></h1>
            <div className="underline"></div>
            <p className="description">
              Final year Computer Science Engineering student at Walchand College of
              Engineering, Sangli. Passionate about creating amazing web experiences and ready
              to start my journey in the tech world with enthusiasm and dedication.
            </p>
          </div>
        </div>
      </div>

      {/* Education Section - Centered */}
      <div className="education-section">
        <div className="terminal-box education-terminal">
          <div className="terminal-header">
            <div className="terminal-controls">
              <span className="control red"></span>
              <span className="control yellow"></span>
              <span className="control green"></span>
            </div>
            <span className="terminal-title">education.info</span>
          </div>
          <div className="terminal-content">
            <p className="command">$ ls education/</p>
            <h1 className="section-title">EDUCATIONAL<span className="highlight">_BACKGROUND</span></h1>
            <div className="education-cards">
              <div className="education-card">
                <div className="card-icon">
                  <FaBook />
                </div>
                <p className="card-label">DEGREE</p>
                <p className="card-value">B.Tech Computer Science Engineering</p>
              </div>
              <div className="education-card">
                <div className="card-icon">
                  <FaAward />
                </div>
                <p className="card-label">COLLEGE</p>
                <p className="card-value">Walchand College of Engineering</p>
              </div>
              <div className="education-card">
                <div className="card-icon">
                  <FaMapMarkerAlt />
                </div>
                <p className="card-label">LOCATION</p>
                <p className="card-value">Sangli, Maharashtra</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Qualities Grid - Four Cards */}
      <div className="qualities-section">
        <div className="qualities-grid">
          <div className="quality-card">
            <div className="quality-icon">
              <FaGraduationCap />
            </div>
            <h3>FINAL YEAR STUDENT</h3>
            <p>Computer Science Engineering student at Walchand College of Engineering, Sangli with strong foundation in programming and problem-solving</p>
          </div>
          <div className="quality-card">
            <div className="quality-icon">
              <FaLaptopCode />
            </div>
            <h3>PASSIONATE CODER</h3>
            <p>Love building interactive web applications and learning new technologies. Always excited to work on challenging projects</p>
          </div>
          <div className="quality-card">
            <div className="quality-icon">
              <FaBullseye />
            </div>
            <h3>GOAL ORIENTED</h3>
            <p>Focused on becoming a skilled full-stack developer and contributing to innovative solutions in the tech industry</p>
          </div>
          <div className="quality-card">
            <div className="quality-icon">
              <FaHeart />
            </div>
            <h3>TEAM PLAYER</h3>
            <p>Enjoy collaborating with others and contributing to team success through dedication and continuous learning</p>
          </div>
        </div>
      </div>

      {/* Quote Section - Bottom */}
      <div className="quote-section">
        <div className="terminal-box quote-terminal">
          <div className="terminal-header">
            <div className="terminal-controls">
              <span className="control red"></span>
              <span className="control yellow"></span>
              <span className="control green"></span>
            </div>
            <span className="terminal-title">quote.txt</span>
          </div>
          <div className="terminal-content">
            <p className="command">$ cat motivational_quote.txt</p>
            <blockquote>
              <em>
                "Every line of code is a step towards building something amazing. As a final year student, I'm excited to apply my knowledge and contribute to innovative solutions."
              </em>
              <footer>– <span className="highlight">pradyumyelame</span></footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;