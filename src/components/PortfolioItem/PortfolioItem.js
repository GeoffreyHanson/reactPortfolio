import React from 'react';
import Tag from '../Tag/Tag';
import './PortfolioItem.css';

const PortfolioItem = (props) => {
  
  return (
    <div className="PortfolioItem">

      <div className="Left">
        <h2 className="Title">{props.title}</h2>
        <img 
          className="Thumbnail" 
          src={props.image} 
          alt={props.title}>
        </img>
        <Tag tags={props.tags}></Tag>
        <div className="Buttons">
          <a  
            className="LiveButton"
            href={props.demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live
          </a>
          <a
            className="CodeButton"
            href={props.code}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          
        </div>
      </div>

      <div className="Right">
        <h3 className="DescriptionHeader">Description</h3>
        <p className="Description">{props.children}</p>
      </div>

    </div>
  );
}

export default PortfolioItem;