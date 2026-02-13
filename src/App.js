import React, { useState, useEffect } from 'react';
import projects from './projectsData';
import './App.css';

// Reusable Component for Project Cards
const ProjectCard = ({ title, description, link }) => (
  <div className="card">
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={link} className="accent-link">Source Code →</a>
  </div>
);

function App() {
  const [heroBg, setHeroBg] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    let imgName = 'night.png';
    
    if (hour >= 5 && hour < 12) {
      imgName = 'dam.png';
    } else if (hour >= 12 && hour < 20) {
      imgName = 'Mountin_Range.png';
    }

    const fullPath = `images/${imgName}`;
    setHeroBg(`linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${fullPath}')`);
  }, []);

  return (
    <div className="portfolio-wrapper">
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="resume.pdf" target="_blank">Resume</a>
        <a href="#contact">Contact</a>
      </nav>

      <header id="hero" style={{ backgroundImage: heroBg }}>
        <h1>Hi, I'm Jakub</h1>
        <img src="images/ja.jpg" alt="Profile" className="profile-circle" />
        <p id="greeting">Welcome</p>
        <div className="button-group">
          <a href="#projects" class="btn btn-outline">My Work</a>
          <a href="resume.png" target="_blank" class="btn btn-outline">Resume</a>
        </div>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>... yea ...</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="grid">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id}
              title={project.title} 
              description={project.description} 
              link={project.link}
            />
          ))}
        </div>
      </section>

      <section id="contact" style={{ textAlign: 'center' }}>
        <h2>How to contact me</h2>
        <div className="button-group" style={{ justifyContent: 'center' }}>
          <a href="mailto:12kuba3@gmail.com" className="btn btn-primary">Email</a>
          <a href="https://www.linkedin.com/in/jakub-borycki-601b3b329/" 
             target="_blank" 
             className="btn linkedin-btn">
             LinkedIn
          </a>
        </div>
      </section>

      <footer>
        <p>&copy; 2026 ComradeCold. Hosted on GitHub Pages.</p>
      </footer>
    </div>
  );
}

export default App;
