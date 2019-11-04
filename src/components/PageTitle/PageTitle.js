import React from 'react';
import PropTypes from 'prop-types';
import './PageTitle.css';

const PageTitle = (props) => {
  const { children } = props;
  return (
    <div className="PageTitle">
      <h1>{children}</h1>
    </div>
  );
};

PageTitle.defaultProps = {
  children: PropTypes.string,
};

PageTitle.propTypes = PageTitle.defaultProps;

export default PageTitle;
