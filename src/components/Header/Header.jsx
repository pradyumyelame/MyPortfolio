import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-scroll';
import {
  FaCode,
  FaUser,
  FaWrench,
  FaFolderOpen,
  FaEnvelope,
  FaDownload,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = (
    <ul className="nav-links">
      <li onClick={closeMenu}>
        <Link to="home" smooth duration={500} spy offset={-70}>
          <FaCode className="nav-icon" />
          <span className="link-text">Home</span>
        </Link>
      </li>
      <li onClick={closeMenu}>
        <Link to="about" smooth duration={500} spy offset={-70}>
          <FaUser className="nav-icon" />
          <span className="link-text">About</span>
        </Link>
      </li>
      <li onClick={closeMenu}>
        <Link to="skills" smooth duration={500} spy offset={-70}>
          <FaWrench className="nav-icon" />
          <span className="link-text">Skills</span>
        </Link>
      </li>
      <li onClick={closeMenu}>
        <Link to="projects" smooth duration={500} spy offset={-70}>
          <FaFolderOpen className="nav-icon" />
          <span className="link-text">Projects</span>
        </Link>
      </li>
      <li onClick={closeMenu}>
        <Link to="contact" smooth duration={500} spy offset={-70}>
          <FaEnvelope className="nav-icon" />
          <span className="link-text">Contact</span>
        </Link>
      </li>
    </ul>
  );

  return (
    <>
      <header className="navbar">
        <div className="logo">
          <div className="logo-icon">
            <FaCode />
          </div>
          <div className="logo-text">
            <h1>pradumyelame</h1>
            <span>~/portfolio</span>
          </div>
        </div>

        <nav className="navbar-center">{navLinks}</nav>

        <div className="navbar-right">
          <a href="/assets/Pradum_Yelame_Resume.pdf" download>
            <button className="resume-button">
              <FaDownload className="resume-icon" />
              <span>Resume</span>
            </button>
          </a>
        </div>

        <button className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      {menuOpen && (
        <div className="mobile-menu">
          {navLinks}
          <a href="/assets/Pradum_Yelame_Resume.pdf" download>
            <button className="resume-button">
              <FaDownload className="resume-icon" />
              <span>Resume</span>
            </button>
          </a>
        </div>
      )}
    </>
  );
};

export default Header;
