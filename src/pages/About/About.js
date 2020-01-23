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
        Front-end developer and technology-enthusiast with a passion for minimalist UX solutions.
        College graduate with certification from the University of Minnesota
        in Full Stack development including JavaScript, CSS, and React.js.
        Through several years of experience in customer service,
        I have developed strong communication skills that aid my affinity for team-oriented work.
        Recently developed an E-commerce website for a small business,
        increasing sales and exposure.
        I aim to build aesthetically pleasing and user-intuitive web experiences.
        </h3>
      </div>
    </div>
  </div>
);

export default About;
