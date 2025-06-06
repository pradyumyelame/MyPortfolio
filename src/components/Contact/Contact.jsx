import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaCode, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Message Form */}
      <div className="terminal-window">
        <div className="terminal-header">
          <span className="traffic-dot red" />
          <span className="traffic-dot yellow" />
          <span className="traffic-dot green" />
          <span className="filename">send_message.form</span>
        </div>
        <div className="terminal-body">
          <p className="command-line">$ compose --new-message</p>
          <h2>SEND_MESSAGE</h2>

          <div className="input-group-row">
            <div className="input-field">
              <p className="command-line">$ input --name</p>
              <input type="text" placeholder="Pradum Yelame" />
            </div>
            <div className="input-field">
              <p className="command-line">$ input --email</p>
              <input type="email" placeholder="yelamepradum36@gmail.com" />
            </div>
          </div>

          <div className="input-field full">
            <p className="command-line">$ input --message</p>
            <textarea placeholder="your_message_here..." rows={4} />
          </div>

          <button className="send-button">
            <FaPaperPlane /> ./send_message
          </button>
        </div>
      </div>

      {/* Contact Info */}
      <div className="side-panel">
        <div className="terminal-window">
          <div className="terminal-header">
            <span className="traffic-dot red" />
            <span className="traffic-dot yellow" />
            <span className="traffic-dot green" />
            <span className="filename">contact_info.json</span>
          </div>
          <div className="terminal-body">
            <p className="command-line">$ cat contact_methods</p>
            <div className="info-box"><FaEnvelope className="info-icon" /><span><strong>EMAIL</strong><br />yelamepradum36@gmai.com</span></div>
            <div className="info-box"><FaPhoneAlt className="info-icon" /><span><strong>PHONE</strong><br />+91 8766724492</span></div>
            <div className="info-box"><FaMapMarkerAlt className="info-icon" /><span><strong>LOCATION</strong><br />Sangli, Maharashtra</span></div>
          </div>
        </div>

        {/* Social Links */}
        <div className="terminal-window">
          <div className="terminal-header">
            <span className="traffic-dot red" />
            <span className="traffic-dot yellow" />
            <span className="traffic-dot green" />
            <span className="filename">social_links.sh</span>
          </div>
          <div className="terminal-body">
            <p className="command-line">$ ls social_profiles/</p>
            <a className="info-box" href="https://github.com/pradyumyelame" target="_blank" rel="noreferrer">
              <FaGithub className="info-icon" /><span><strong>GitHub</strong><br />@pradyumyelame — <span className="right">15+ repos</span></span>
            </a>
            <a className="info-box" href="https://www.linkedin.com/in/pradum-yelame-120826215/" target="_blank" rel="noreferrer">
              <FaLinkedin className="info-icon" /><span><strong>LinkedIn</strong><br />Pradum Yelame — <span className="right">Connect</span></span>
            </a>
            <a className="info-box" href="https://leetcode.com/u/yelamepradum36/" target="_blank" rel="noreferrer">
              <FaCode className="info-icon" /><span><strong>LeetCode</strong><br />@yelamepradum36 — <span className="right">500+ solved</span></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
