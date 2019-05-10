import React from 'react';
import './NavElement.css';

const NavElement = (props) => {
  return (
    <div className="NavElement">
      {/* Will need the link added inside. */}
      <a 
        href={props.page} 
        target={props.target}
        title={props.title}
      >
        <i class={props.image}></i>
      </a>
    </div>
  )
}

export default NavElement;