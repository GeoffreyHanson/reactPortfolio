import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
// import Tag from '../Tag/Tag';

const Icons = (props) => {
  const { icons } = props;
  return (
    <div className="Icons">
      {icons.map((icon) => (
        <Icon
          icon={icon}
        />
      ))}
    </div>
  );
};

Icons.propTypes = {
  icons: PropTypes.string,
};

Icons.defaultProps = {
  icons: PropTypes.string,
};


export default Icons;
