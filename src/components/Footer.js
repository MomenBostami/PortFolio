import React from 'react';


const Footer = () => {
  return (
    <footer id='footer-container' className="footer-container">
      <div className="footer-content">
        <div className="footer-section about">
          <h3 className="footer-heading">About</h3>
          <p>
            This project is built to showcase expertise, education, skills, and
            languages. Feel free to explore and connect!
          </p>
        </div>
        <div className="footer-section contact">
  <h3 className="footer-heading">Contact</h3>
  <ul className="footer-contact">
    <li>
      <a href="mailto:bostamimomen@gmail.com" className="contact-link">
        <i className="fas fa-envelope"></i> bostamimomen@gmail.com
      </a>
    </li>
    <li>
      <a href="tel:+972598065885" className="contact-link">
        <i className="fas fa-phone"></i> +972-59-806-5885
      </a>
    </li>
    <li>
      <a href="https://www.google.com/maps/@32.2232235,35.2663051,17z?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="contact-link">
        <i className="fas fa-map-marker-alt"></i> Nablus, Palestine
      </a>
    </li>
  </ul>
</div>

      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Momen Bostami. All rights reserved.</p>
        <div className="social-icons_F">
          <a href="https://www.facebook.com/Momen.Boss.47/" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://linkedin.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/MomenBostami" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
