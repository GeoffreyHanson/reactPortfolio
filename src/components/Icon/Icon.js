import React from 'react';
import PropTypes from 'prop-types';

const Icon = (props) => {
  const { icon } = props;
  const result = icon === 'HTML5' ? <i className="fab fa-html5" /> : <p>Not Working</p>;
  return (
    result
  );
};

Icon.defaultProps = {
  icon: PropTypes.string,
};

Icon.PropTypes = Icon.defaultProps;

export default Icon;
