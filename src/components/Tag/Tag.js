import React from 'react';
import PropTypes from 'prop-types';
import './Tag.css';

const Tag = (props) => {
  const { tags } = props;
  return (
    <div className="Tag">
      {tags.map((tag) => (
        <i>
          {' '}
          {tag}
          {' '}
          {tag === 'WordPress' ? 'Yes' : 'No'}
        </i>
      ))}
    </div>
  );
};

Tag.defaultProps = {
  tag: PropTypes.string,
};

Tag.propTypes = Tag.defaultProps;

export default Tag;
