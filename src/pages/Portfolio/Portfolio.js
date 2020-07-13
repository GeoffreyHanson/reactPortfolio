import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import PageTitle from '../../components/PageTitle/PageTitle';
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem';
import FGThumb from './thumbnails/FG-site-thumb.png';
import WalletThumb from './thumbnails/BitcoinWalletThumb.jpg';
import DrumThumb from './thumbnails/react-drum-kit.png';
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
        title="React Drum Kit"
        image={DrumThumb}
        tags={['HTML5', 'CSS3', 'React']}
        demo="https://drum-kit-react.netlify.app/"
        code="https://github.com/GeoffreyHanson/drum-kit"
      >
        A key controlled drum kit with neumorphic styling.
      </PortfolioItem>
      <PortfolioItem
        title="Finger-Gard"
        image={FGThumb}
        tags={['CSS3', 'WordPress']}
        demo="https://finger-gard.com/"
      >
          An E-commerce site built with WordPress and WooCommerce for Finger-Gard door guards.
      </PortfolioItem>
      <PortfolioItem
        title="Bitcoin Wallet"
        image={WalletThumb}
        tags={['HTML5', 'CSS3']}
        demo="https://codepen.io/geoffreyhanson/pen/qwvYGv"
        code="https://codepen.io/geoffreyhanson/pen/qwvYGv"
      >
          My replication of a design for a wallet app made my Nina Geometrieva.
      </PortfolioItem>
    </div>
  </div>
);

export default Portfolio;
