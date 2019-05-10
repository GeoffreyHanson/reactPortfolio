import React from 'react';
import './Tag.css';

const Tag = (props) => {
  const { tags } = props;
  return (
    <div className="Tag">
        {tags.map(tag => {
          return (
            <i> {tag} </i>
          )
        })}
    </div>
  );
}

export default Tag;