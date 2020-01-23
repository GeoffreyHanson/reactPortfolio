import React from 'react';
// import Prop-Types from 'prop-types';
import NavElement from '../NavElement/NavElement';
import './Navigation.css';

const Navigation = () => (
  <div
    className="Navigation"
  >
    <div className="Items">
      <NavElement
        image="fas fa-code fa-3x"
        page="/Projects"
        pageName="Projects"
        title="Projects"
      />
      <NavElement
        image="fab fa-github fa-3x"
        page="https://github.com/GeoffreyHanson"
        pageName="GitHub"
        target="_blank"
        title="GitHub"
      />
      <NavElement
        image="fas fa-user fa-3x"
        page="/About"
        pageName="About Me"
        title="About Me"
      />
      <NavElement
        image="fab fa-linkedin fa-3x"
        page="https://www.linkedin.com/in/geoffreykhanson"
        pageName="LinkedIn"
        target="_blank"
        title="LinkedIn"
      />
      <NavElement
        image="far fa-envelope fa-3x"
        page="/Contact"
        pageName="Contact"
        title="Contact"
      />
    </div>
  </div>
);


export default Navigation;
