import React from 'react';

const Header = () => {
  return (
    <header className="hero-section">
      <div className="social-icons">
        <a href="https://www.facebook.com/Momen.Boss.47/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://github.com/MomenBostami" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.instagram.com/momenbostami_47/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <div className="navbar-container">
        <nav className="navbar">
          <ul>
            <li>
              <a href="#about-section">About</a>
            </li>
            <li>
              <a href="#experience-container">Projects & Education</a>
            </li>
            <li>
              <a href="#footer-container">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="content">
        <h1>
          Hello, I am <span>Momen Bostami</span>
        </h1>
        <p>Front-end Developer</p>
        <a href='#about-section' className="resume-button">About Me</a >
      </div>
    </header>
  );
};

export default Header;
