import React, { useEffect, useState } from 'react';
import './Home.css';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaStar,
  FaGraduationCap,
  FaFileDownload,
  FaCode,
  FaTrophy,
  FaLaptopCode,
} from 'react-icons/fa';

const lines = [
  { type: 'command', text: '$ display_user_profile' },
  {
    type: 'image',
    src: '/assets/p1.jpg', // Update with your actual image path
    alt: 'Profile Image',
  },
  { type: 'command', text: '$ whoami' },
  { type: 'name', text: 'PRADUM YELAME' },
  {
    type: 'description',
    text: 'Final Year Student | Computer Engineering | WCE, Sangli|',
  },
  { type: 'command', text: '$ cat current_role.txt' },
  { type: 'highlight', text: 'FullStack Web Developer' },
  { type: 'command', text: '$ cat academic_info.json' },
  {
    type: 'list',
    items: [
      [<FaTrophy key="cgpa" className="icon" />, 'CGPA: 7.5/10'],
      [<FaLaptopCode key="dsa" className="icon" />, 'DSA: 500+ Problems'],
      [<FaGraduationCap key="grad" className="icon" />, 'Graduation: 2026'],
      [<FaCode key="proj" className="icon" />, 'Projects: 10+'],
    ],
  },
  { type: 'command', text: '$ ls technologies/' },
  {
    type: 'badges',
    items: ['React', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB','MySQl', 'DSA'],
  },
  { type: 'command', text: '$ cat contact.info' },
  {
    type: 'contact',
    items: [
      [<FaEnvelope key="email" className="icon" />, 'yelamepradum36@gmail.com'],
      [<FaPhoneAlt key="phone" className="icon" />, '+91 8766724492'],
    ],
  },
  { type: 'command', text: '$ ./execute_actions.sh' },
];

const roles = ['FullStack Developer','Software Developer', 'Problem Solver', 'Backend Developer'];

const Home = () => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedWords, setDisplayedWords] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= lines.length) return;

    const line = lines[lineIndex];
    if (line.type === 'command' || line.type === 'highlight' || line.type === 'name' || line.type === 'description') {
      const words = line.text.split(' ');
      if (wordIndex < words.length) {
        const newWords = displayedWords.concat(words[wordIndex]);
        setDisplayedWords(newWords);
        const timeout = setTimeout(() => {
          setWordIndex(wordIndex + 1);
        }, 150);
        return () => clearTimeout(timeout);
      } else {
        setDisplayedLines((prev) => [...prev, { ...line, text: displayedWords.join(' ') }]);
        setDisplayedWords([]);
        setWordIndex(0);
        setLineIndex(lineIndex + 1);
      }
    } else {
      setDisplayedLines((prev) => [...prev, line]);
      setLineIndex(lineIndex + 1);
    }
  }, [lineIndex, wordIndex]); // Removed displayedWords here

  // Role scrolling effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="terminal-wrapper">
      <div className="terminal-header">
        <div className="traffic-buttons">
          <span className="red" />
          <span className="yellow" />
          <span className="green" />
        </div>
        <span className="terminal-title">pradum_portfolio.exe</span>
      </div>

      <div className="terminal-body">
        {displayedLines.map((line, index) => {
          switch (line.type) {
            case 'command':
              return (
                <p key={index} className="command terminal-line" style={{ '--delay': `${index * 0.4}s` }}>
                  {line.text}
                </p>
              );
            case 'image':
              return (
                <div key={index} className="profile-image terminal-line" style={{ '--delay': `${index * 0.4}s` }}>
                  <img src={line.src} alt={line.alt} />
                </div>
              );
            case 'name':
              return (
                <h1 key={index} className="name terminal-line" style={{ '--delay': `${index * 0.4}s` }}>
                  {line.text}
                </h1>
              );
            case 'description':
              return (
                <p key={index} className="description terminal-line" style={{ '--delay': `${index * 0.4}s` }}>
                  {line.text}
                </p>
              );
            case 'highlight':
              return (
                <p key={index} className="highlight-text terminal-line" style={{ '--delay': `${index * 0.4}s` }}>
                  {line.text}
                </p>
              );
            case 'list':
              return (
                <div key={index} className="info-grid terminal-line" style={{ '--delay': `${index * 0.4}s` }}>
                  <div className="info-item">
                    {line.items[0][0]}
                    <span>{line.items[0][1]}</span>
                  </div>
                  <div className="info-item">
                    {line.items[2][0]}
                    <span>{line.items[2][1]}</span>
                  </div>
                  <div className="info-item">
                    {line.items[1][0]}
                    <span>{line.items[1][1]}</span>
                  </div>
                  <div className="info-item">
                    {line.items[3][0]}
                    <span>{line.items[3][1]}</span>
                  </div>
                </div>
              );
            case 'badges':
              return (
                <div key={index} className="tech-badges terminal-line" style={{ '--delay': `${index * 0.4}s` }}>
                  {line.items.map((item, i) => (
                    <span key={i}>{item}</span>
                  ))}
                </div>
              );
            case 'contact':
              return (
                <div key={index} className="contact terminal-line" style={{ '--delay': `${index * 0.4}s` }}>
                  {line.items.map(([icon, text], i) => (
                    <p key={i} className="contact-item">
                      {icon}
                      <span>{text}</span>
                    </p>
                  ))}
                </div>
              );
            default:
              return null;
          }
        })}

        {/* Word-by-word currently typing line */}
        {displayedWords.length > 0 && (
          <p className="command typing-line">
            {displayedWords.join(' ')}
            <span className="cursor">|</span>
          </p>
        )}

        {/* Role Scrolling */}
        <div className="role-scroller">
          {roles.map((role, i) => (
            <span
              key={i}
              className={`role ${i === currentRoleIndex ? 'visible' : 'hidden'}`}
            >
              {role}
            </span>
          ))}
        </div>

        {/* Resume Download Button as a link */}
        <a
          href="/assets/Pradum_Yelame_Resume.pdf"
          download
          className="resume-button"
        >
          <FaFileDownload /> Resume
        </a>
      </div>
    </div>
  );
};

export default Home;
