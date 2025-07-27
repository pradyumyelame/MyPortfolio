import React from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'GramConnect:- Digital Gram Panchayat Platform',
    year: '2025',
    status: 'LIVE',
    statusClass: 'status-live',
    description:
      'MERN-based platform digitizing rural governance with secure login, role-based access, and admin dashboards; enabled certificate applications, grievance redressal, and real-time status tracking.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT'],
    image: '/assets/p2.jpg',
    filename: 'gramconnect_platform.project',
    codeLink: 'https://github.com/pradyumyelame/GramConnect',
    liveLink: 'https://gram-connect.vercel.app/'
  },
  {
  title: 'SkillSync: AI Resume Builder & Analyzer',
  year: '2025',
  status: 'LIVE',
  statusClass: 'status-live',
  description:
    'An intelligent AI-powered platform that helps users build, customize, and optimize professional resumes. Features include secure authentication, dynamic form-based resume creation, ATS analysis using Google Gemini API, real-time preview, and one-click PDF export.',
  tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Google Gemini API', 'html2pdf.js'],
  image: '/assets/r.jpeg', // Replace with your actual image path
  filename: 'skillsync_resume_builder_&_analyzer.project',
  codeLink: 'https://github.com/pradyumyelame/SkillSync',
  liveLink: 'https://skill-sync-sandy.vercel.app'
},


  {
    id: 3,
    title: 'ArogyaSathi:- Modern medical portal',
    year: '2024',
    status: 'Completed',
    statusClass: 'status-completed',
    description:
      'An AI-powered healthcare platform offering personalized health advice, symptom checking, medical record management, and virtual assistance. Designed to enhance preventive care and simplify access to health services.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT',"AI"],
    image: '/assets/p3.jpg',
    filename: 'modern_medical_portal.project',
    codeLink: 'https://github.com/pradyumyelame/Mini_Project',
    liveLink: 'https://github.com/pradyumyelame/Mini_Project'
  },
  {
    id: 4,
    title: 'rideBooking:- UBER Application',
    year: '2025',
    status: 'FEATURED',
    statusClass: 'status-featured',
    description:
      'A full-stack ride-hailing platform enabling users to book rides in real-time, track driver location, and manage trip history. Includes role-based access for users and drivers, fare calculation, and secure authentication.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT'],
    image: '/assets/p4.webp',
    filename: 'ridebooking_UBER.project',
    codeLink: 'https://github.com/pradyumyelame/UBER_APP',
    liveLink: 'https://github.com/pradyumyelame/UBER_APP'
  },
  {
    id: 5,
    title: 'CodeGuardian- AI-Powered Code Reviewer ',  
    year: '2024',
    status: 'Completed',
    statusClass: 'status-completed',
    description:
      'Built an AI Code Reviewer using React.js, Node.js, Express.js, and Gemini API to provide real-time, intelligent feedback on code quality, readability, and best practices — boosting developer productivity and learning.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Google Gemini API'],
    image: '/assets/p5.webp',
    filename: 'AI-Powered Code Reviewer.project',
    codeLink: 'https://github.com/pradyumyelame/CodeGuardian-AI-Powered-Code-Reviewer-',
    liveLink: 'https://github.com/pradyumyelame/CodeGuardian-AI-Powered-Code-Reviewer-'
  },
  {
    id: 6,
    title: 'TO-DO List Application',
    year: '2024',
    status: 'Completed',
    statusClass: 'status-completed',
    description:
      'Developed a To-Do List app enabling users to add, update, delete, and manage tasks efficiently with a clean UI and real-time interaction.',
    tech: ["HTML", "CSS", "JavaScript", "React.js"],
    image: '/assets/p6.webp',
    filename: 'to_do_list.project',
    codeLink: 'https://github.com/pradyumyelame/TO_DO_LIST',
    liveLink: 'https://github.com/pradyumyelame/TO_DO_LIST'
  },
  {
    id: 7,
    title: 'MyPortfolio',
    year: '2025',
    status: 'Live',
    statusClass: 'status-live',
    description:
      'A personal portfolio website showcasing my skills, projects, and achievements. Built with React.js, it features a responsive design, interactive elements, and a clean user interface to highlight my work effectively.',
    tech: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    image: '/assets/p7.jpg',
    filename: 'myportfolio.project',
    codeLink: 'https://github.com/pradyumyelame/MyPortfolio',
    liveLink: 'https://pradumyelame.vercel.app/'
  }
];

const upcomingProjects = [
  'Full-Stack Blog',
  'React Native App',
  'Portfolio v2.0',
  'Open Source Contribution'
];

export default function ProjectShowcase() {
  return (
    <div className="showcase-container">
      {/* Header Section */}
      <div className="terminal-header">
        <div className="header-top">
          <div className="traffic-lights">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="terminal-title">project_showcase.exe</div>
          <div className="green-indicator"></div>
        </div>

        <div className="header-content">
          <p className="command">$ git log --oneline --projects</p>
          <h1 className="main-title">MY_PROJECTS</h1>
          <p className="subtitle">// Building solutions, one commit at a time</p>
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            {/* Card Header */}
            <div className="card-header">
              <div className="card-traffic-lights">
                <div className="card-dot red"></div>
                <div className="card-dot yellow"></div>
                <div className="card-dot green"></div>
              </div>
              <div className="card-title-bar">{project.filename}</div>
              <div className="card-indicator"></div>
            </div>

            {/* Project Image */}
            <div className="card-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="card-image"
              />
                {project.status && (
                  <div className={`status-badge ${project.statusClass}`}>
                  {project.status}
                </div>
                )}
            </div>

            {/* Card Content */}
            <div className="card-content">
              <div className="project-year">🌐 {project.year} PROJECT</div>

              <p className="command">$ cat project_info.md</p>
              <h2 className="project-title">{project.title}</h2>

              <p className="command">$ cat description.txt</p>
              <p className="project-description">{project.description}</p>

              <p className="command">$ ls technologies/</p>
              <div className="tech-stack">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <p className="command">$ ./deploy.sh</p>
              <div className="button-group">
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-code"
                >
                  📂 Code
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-live"
                >
                  🔗 Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pipeline Section */}
      <div className="pipeline-section">
        <div className="pipeline-header">
          <div className="traffic-lights">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="terminal-title">upcoming_projects.queue</div>
          <div className="green-indicator"></div>
        </div>

        <div className="pipeline-content">
          <p className="command">$ cat upcoming_projects.queue</p>
          <h2 className="pipeline-title">PROJECT_PIPELINE</h2>
          <p className="pipeline-description">
            Currently architecting innovative solutions including a full-stack
            blog platform and a React Native mobile application.
          </p>
          <div className="upcoming-tags">
            {upcomingProjects.map((project, index) => (
              <span key={index} className="upcoming-tag">
                {project}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
