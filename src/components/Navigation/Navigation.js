import React from 'react';
import NavElement from '../NavElement/NavElement';
import './Navigation.css';

const Navigation = (props) => {
  const { style } = props;
  return (
    <div 
      className="Navigation" 
      style={style}>
      <div className="Items">
      <NavElement 
        image="fas fa-code fa-3x" 
        page="/Portfolio"
        pageName="Portfolio" 
        title="Portfolio"
      />
      <NavElement 
        image="fab fa-github fa-3x" 
        page="https://github.com/GeoffreyHanson"
        pageName="GitHub" 
        target="_blank"
        title="LinkedIn"
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
}

export default Navigation;