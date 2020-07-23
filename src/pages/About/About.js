import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import PageTitle from '../../components/PageTitle/PageTitle';
import './About.css';

const About = () => (
  <div className="About">
    <header className="Header">
      <PageTitle>Hello! I&apos;m Geoffrey.</PageTitle>
    </header>
    <div>
      <Navigation />
      <div className="AboutMe">
        <h3 className="AboutText">
        Front-end developer with a passion for increasing accessibility to information and improving how people interact with it. 
        College graduate with certification from the University of Minnesota in full-stack development. 
        Forged strong communication skills through six years of customer service experience, aiding an affinity for team-oriented work. 
        Aims to build aesthetically pleasing and intuitive web experiences.
        </h3>
      </div>
    </div>
  </div>
);

export default About;
