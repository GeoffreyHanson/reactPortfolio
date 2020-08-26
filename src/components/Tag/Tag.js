import React from 'react';
import PropTypes from 'prop-types';
import './Tag.css';
import Icon from '../Icon/Icon';

const Tag = (props) => {
  const { tags } = props;
  // console.log(tags);
  return (
    <div className="Icon">
      {tags.map((tag) => (
        <Icon tag={tag} />
        // <i>
        //   {' '}
        //   {tag}
        //   {' '}
        //   {tag === 'WordPress' ? 'YES' : 'NO'}
        //   {/* <i className="fab fa-html5" /> */}
        // </i>
      ))}
    </div>
  );
};

Tag.defaultProps = {
  tags: PropTypes.arrayOf(PropTypes.string),
};

Tag.propTypes = Tag.defaultProps;

export default Tag;
