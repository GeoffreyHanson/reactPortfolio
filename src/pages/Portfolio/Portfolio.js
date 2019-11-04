import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import PageTitle from '../../components/PageTitle/PageTitle';
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem';
import FGThumb from './thumbnails/FG-site-thumb.png';
import WalletThumb from './thumbnails/BitcoinWalletThumb.jpg';
import BaselineThumb from './thumbnails/BaselineThumb.png';
import BookSaverThumb from './thumbnails/BookSaverThumb.JPG';
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
        title="Finger-Gard"
        image={FGThumb}
        tags={['WordPress', 'CSS3']}
        demo="https://finger-gard.com/"
      >
          An E-commerce site built with WordPress and WooCommerce for Finger-Gard door guards.
      </PortfolioItem>
      <PortfolioItem
        title="Book Checklist"
        image={BookSaverThumb}
        tags={['HTML5', 'CSS3', 'ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB']}
        demo="https://book-saver.herokuapp.com/"
        code="https://github.com/GeoffreyHanson/book-saver"
      >
          Too many books to read? Add them to the list!
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
      <PortfolioItem
        title="Baseline"
        image={BaselineThumb}
        tags={['HTML5', 'CSS3', 'NodeJS', 'ExpressJS']}
        demo="https://geoffreyhanson.github.io/Baseline/"
        code="https://github.com/GeoffreyHanson"
      >
          Submit a photo of yourself to the Baseline app,
          and it will be a truly dispassionate and perfectly consistent judge,
          returning scores from the Face++ API algorithms quantifying
          &quot;emotion&quot; and &quot;beauty&quot;.
          When submitting the photo you are asked for your current status in the job market,
          and any other comments you wish to include. With this information,
          you can track whether you are getting better at presenting an
          attractive and cheerful face to the world.
          If you are satisfied with your appearance,
          Baseline&apos;s ongoing feedback can warn you that
          you&apos;re revealing more than you think.
      </PortfolioItem>
    </div>
  </div>
);

export default Portfolio;
