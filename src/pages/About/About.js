import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import PageTitle from '../../components/PageTitle/PageTitle';
import './About.css';

// Why not ES6 function?
const About = () => {
  return (
    <div className="About">
      <header className="Header">
        <PageTitle>Hello! I'm Geoffrey.</PageTitle>
      </header>
      <div>
        <Navigation />
        <h3 className="AboutMe">
          Web Developer and technology-enthusiast with a passion for minimalist UX solutions. 
          College graduate and student of the University of Minnesota Coding Bootcamp. 
          Through several years of experience in customer service, I have developed strong communications skills that aid my affinity for team-oriented work. 
          Seven years of learning foreign languages has allowed me to develop an acuity for detecting syntactical errors in code. 
          My studies in economics have fueled my enjoyment of solving complex problems, whether they be mathematical or logical. 
          I aim to build aesthetically pleasing and user intuitive web experiences.
        </h3>
      </div>
    </div>
  );
}

export default About;