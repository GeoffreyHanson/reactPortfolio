import React from 'react';
import PropTypes from 'prop-types';
import Tag from '../Tag/Tag';
// import Icons from '../Icons/Icons';
import './PortfolioItem.css';
// import './PortfolioItemTest.css';

const PortfolioItem = (props) => {
  const {
    tags, title, image, demo, code, children,
  } = props;

  // Replacing spaced in the titles with dashes for ids
  const id = title.split(' ').join('-').toLowerCase();

  return (
    <>
      <span class="anchor" id={id}></span>
      <div className="PortfolioItem">
        <div className="Left">
          <h2 className="Title">{title}</h2>
          {/* <div className="ThumbnailWrapper"> */}
          <img
            className="Thumbnail"
            src={image}
            alt={title}
          />
          {/* </div> */}
          <Tag tags={tags} />
          {/* <Icons icons={icons} /> */}
          <div className="Buttons">
            <a
              className="LiveButton"
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>
            <a
              className="CodeButton"
              href={code}
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>

          </div>
        </div>

        <div className="Right">
          <h3 className="DescriptionHeader">Description</h3>
          <p className="Description">{children}</p>
        </div>

      </div>
    </>
  );
};

PortfolioItem.defaultProps = {
  tags: PropTypes.array,
  // icons: PropTypes.array,
  title: PropTypes.string,
  image: PropTypes.string,
  demo: PropTypes.string,
  code: PropTypes.string,
  children: PropTypes.string,
};

PortfolioItem.propTypes = PortfolioItem.defaultProps;

export default PortfolioItem;
