import React from 'react';

const About = () => {
  return (
    <section id="about-section" className="about-section">
      <div className="about-container">
        <div className="about-box">
          <h2>Who am I?</h2>
          <p className="about-subtitle">A Web Developer Located In Our Lovely Earth</p>
          <p className="about-description">
            Computer Engineering graduate from An-Najah University with a software development
            background. Solid understanding of computer science fundamentals and hands-on experience
            in diverse programming languages and technologies.
          </p>
        </div>

        <div className="about-box">
          <h2>Personal Info</h2>
          <ul className="personal-info">
            <li>
              <strong>Birthdate:</strong> 29/01/2002
            </li>
            <li>
              <strong>Email:</strong> bostamimomen@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> + 972-59-806-5885
            </li>
            <li>
              <strong>Address:</strong> Palestine - Nablus.
            </li>
          </ul>
          <div className="social-icons">
            <a href="https://www.facebook.com/Momen.Boss.47/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/momenbostami_47/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
