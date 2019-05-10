import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import PageTitle from '../../components/PageTitle/PageTitle';
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem';
import BaselineThumb from './/thumbnails/BaselineThumb.png';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="Portfolio">
      <header className="Header">
        <PageTitle>My Work</PageTitle>
      </header>
      <div>
        <Navigation /> 
        <PortfolioItem
          title="Baseline"
          image={BaselineThumb}
          tags={['HTML5', 'CSS3', 'ReactJS']}
          demo=""  
          code="https://github.com/GeoffreyHanson"        
        >          
          This is a description of the app.
        </PortfolioItem>
        <PortfolioItem
          title="Baseline"
          image={BaselineThumb}
          tags={['HTML5', 'CSS3', 'ReactJS']}
          demo=""  
          code="https://github.com/GeoffreyHanson"        
        >          
          This is a description of the app.
        </PortfolioItem>
        <PortfolioItem
          title="Baseline"
          image={BaselineThumb}
          tags={['HTML5', 'CSS3', 'ReactJS']}
          demo=""  
          code="https://github.com/GeoffreyHanson"        
        >          
          This is a description of the app.
        </PortfolioItem>
      </div>
    </div>
  )
}

export default Portfolio;