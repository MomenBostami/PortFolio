import React from 'react';

const ExperienceSection = () => {
  return (
    // <div style={{ backgroundColor : 'white', marginTop: '-20px'  }}>
    //     <h1 id="PE_s" style={{ fontSize: '30px' , color :'#e94560'  }}>Projects & Education</h1>
    <div id='experience-container' className="experience-container">
      <div className="experience-block">
        <h2 className="experience-heading">Projects</h2>
        <div className="experience-list">
          <div className="experience-item">
            <h3 className="experience-period">Wazzifni Graduation Project</h3>
            <p className="experience-description">  Developed with my colleague a comprehensive 
                                                    graduation project called Wazzifni using React Native 
                                                    and React. "Wazzifni" is a job-matching platform 
                                                    designed to connect university students in the West 
                                                    Bank with flexible employment opportunities, 
                                                    supporting local businesses by providing reliable staff.
                                                    Key features include user-friendly interfaces, advanced 
                                                    filtering, real-time updates, chat services and a 
                                                    feedback system. The project uniquely addresses the 
                                                    specific needs of students and businesses in the region.</p>
          </div>
        </div>
      </div>

      <div className="education-block">
        <h2 className="experience-heading">Education</h2>
        <div className="education-list">
          <div className="education-item">
            <h3 className="education-period">2019 - 2024</h3>
            <h4 className="education-title">Bachelor</h4>
            <p className="education-description">An-Najah University Bachelor of Computer Engineering, 2.67 GPA.</p>
          </div>
          <div className="education-item">
            <h3 className="education-period">2018 - 2019</h3>
            <h4 className="education-title">High School Degree</h4>
            <p className="education-description">Graduated with 90.3 Degree</p>
          </div>
        </div>
      </div>

      <div className="skills-block">
        <h2 className="experience-heading">Skills</h2>
        <ul className="skills-list">
          <li>
            <span>HTML5 & CSS3</span>
            <div className="skills-bar">
              <div className="skills-progress" style={{ width: '80%' }}></div>
            </div>
          </li>
          <li>
            <span>JavaScript</span>
            <div className="skills-bar">
              <div className="skills-progress" style={{ width: '60%' }}></div>
            </div>
          </li>
          <li>
            <span>React JS</span>
            <div className="skills-bar">
              <div className="skills-progress" style={{ width: '60%' }}></div>
            </div>
          </li>
          <li>
            <span>Node JS & MongoDB</span>
            <div className="skills-bar">
              <div className="skills-progress" style={{ width: '60%' }}></div>
            </div>
          </li>
        </ul>
      </div>

      <div className="languages-block">
        <h2 className="experience-heading">Languages</h2>
        <ul className="languages-list">
          <li>
            <span>English</span>
            <div className="languages-bar">
              <div className="languages-progress" style={{ width: '70%' }}></div>
            </div>
          </li>
          <li>
            <span>Arabic</span>
            <div className="languages-bar">
              <div className="languages-progress" style={{ width: '100%' }}></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    // </div>
  );
};

export default ExperienceSection;
