import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import PageTitle from '../../components/PageTitle/PageTitle';
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem';
import FGThumb from './thumbnails/FG-site-thumb.png';
import WalletThumb from './thumbnails/BitcoinWalletThumb.jpg';
import DrumThumb from './thumbnails/react-drum-kit.png';
import NightowlThumb from './thumbnails/nightowl-thumb.png';
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
        title="Nightowl"
        image={NightowlThumb}
        tags={['HTML5', 'CSS3', 'JavaScript', 'React']}
        demo="https://nightowl-coffee.netlify.app"
        code="https://github.com/GeoffreyHanson/nightowl"
      >
        This React app uses the Yelp API to grab the closest coffee shops to the user's location
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
        re-engineered in React with Hooks and dressed in neumorphic styling.
      </PortfolioItem>
      <PortfolioItem
        title="Finger-Gard"
        image={FGThumb}
        tags={['CSS3', 'WordPress']}
        demo="https://finger-gard.com"
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
