import React from 'react';
import PropTypes from 'prop-types';
import './NavElement.css';

const NavElement = (props) => {
  const {
    page, target, title, image,
  } = props;
  return (
    <div className="NavElement">
      {/* Will need the link added inside. */}
      <a
        href={page}
        target={target}
        title={title}
      >
        <i className={image} />
      </a>
      <span className="SectionTitle">
        {title}
      </span>
    </div>
  );
};

NavElement.defaulProps = {
  page: PropTypes.string,
  target: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
};

NavElement.propTypes = NavElement.defaulProps;

export default NavElement;
