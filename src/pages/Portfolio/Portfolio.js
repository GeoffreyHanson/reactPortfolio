import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import PageTitle from '../../components/PageTitle/PageTitle';
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem';
import SkywayThumb from './thumbnails/stpaul-skyway.png';
import NightowlThumb from './thumbnails/nightowl-thumb.png';
import InteractiveMapThumb from './thumbnails/interactive-map.png';
import DrumThumb from './thumbnails/react-drum-kit.png';
import FGThumb from './thumbnails/FG-site-thumb.png';
import WalletThumb from './thumbnails/BitcoinWalletThumb.jpg';
import './Portfolio.css';

const Portfolio = () => (
  <div className="Portfolio">
    <header className="Header">
      <PageTitle>My Work</PageTitle>
    </header>
    <div>
      <Navigation
        className="Navigation"
      />
      <PortfolioItem
        title="St. Paul Skyway Map"
        image={SkywayThumb}
        tags={['HTML5', 'CSS3', 'JavaScript', 'React']}
        demo="https://stpaul-skyway.netlify.app/"
        code="https://github.com/GeoffreyHanson/stpaul-skyway-app/"
      >
        Worked with a small team to create a mobile-first prototype app using React and Google APIs to help users through the Saint Paul Skyways.
      </PortfolioItem>
      <PortfolioItem
        title="Nightowl"
        image={NightowlThumb}
        tags={['HTML5', 'CSS3', 'JavaScript', 'React']}
        demo="https://nightowl-coffee.netlify.app"
        code="https://github.com/GeoffreyHanson/nightowl"
      >
        This app uses the Yelp API to grab the closest coffee shops to the user's location
        and sorts them based on their closing times with priority for overnight shops.
      </PortfolioItem>
      <PortfolioItem
        title="React Drum Kit"
        image={DrumThumb}
        tags={['HTML5', 'CSS3', 'JavaScript', 'React']}
        demo="https://drum-kit-react.netlify.app"
        code="https://github.com/GeoffreyHanson/drum-kit"
      >
        A keyboard controlled drum kit <br /> 
        re-engineered in React with Hooks to better understand event handling 
        and dressed in neumorphic styling.
      </PortfolioItem>
      <PortfolioItem
        title="Interactive Map"
        image={InteractiveMapThumb}
        tags={['HTML5', 'CSS3', 'WordPress']}
        demo="https://uni-engineer.com/#igm-live-filter-3207"
        code=""
      >
        An interactive map made for Uni-Systems Engineering with custom styling for all 
        map nodes, hover text, buttons, and popup content.
      </PortfolioItem>
      <PortfolioItem
        title="Finger-Gard"
        image={FGThumb}
        tags={['CSS3', 'WordPress']}
        demo="https://finger-gard.com"
        code=""
      >
        An E-commerce site built with WordPress, WooCommerce, Elementor, and custom CSS for Finger-Gard door guards.
      </PortfolioItem>
      <PortfolioItem
        title="Bitcoin Wallet"
        image={WalletThumb}
        tags={['HTML5', 'CSS3']}
        demo="https://codepen.io/geoffreyhanson/pen/qwvYGv"
        code="https://codepen.io/geoffreyhanson/pen/qwvYGv"
      >
        My incarnation of a mobile wallet app designed by <a href="https://dribbble.com/shots/4891089-A-wallet-for-digital-gold" target="_blank">Nina Geometrieva</a>.

      </PortfolioItem>
    </div>
  </div>
);

export default Portfolio;
