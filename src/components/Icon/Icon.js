import React from 'react';
import PropTypes from 'prop-types';
import './Icon.css';

const Icon = (props) => {
  const { tag } = props;
  // const html5 = { color: '#e54c21' };
  // const css3 = { color: '#254bdd' };
  // const react = { color: '#61dafb' };
  // const node = { color: '#68a063' };
  // const js = { color: }
  
  // Enum syntax
  const iconOptions = {
    'HTML5': <i className="fab fa-html5 fa-2x" title={tag}  />,
    'CSS3': <i className="fab fa-css3-alt fa-2x" title={tag}  />,
    'JavaScript': <i className="fab fa-js fa-2x" title={tag} />,
    'React': <i className="fab fa-react fa-2x" title={tag}  />,
    'NodeJS': <i className="fab fa-node-js fa-2x" title={tag} />,
    'ExpressJS': (
      <div className="ExpressJS">
        <span>Express</span>
        <i className="fab fa-js fa-2x" title={tag} />
      </div>
    ),
    'WordPress': <i className="fab fa-wordpress-simple fa-2x" title={tag} />,
  }

  return (
    <>
      {iconOptions[tag]}
    </>
  );


  
  // Switch case syntax

  // switch (tag) {
  //   case 'HTML5':
  //     return <i className="fab fa-html5 fa-2x" title={tag} style={html5} />;

  //   case 'CSS3':
  //     return <i className="fab fa-css3-alt fa-2x" title={tag} style={css3} />;

  //   case 'JS':
  //     return <i className="fab fa-js fa-2x" title={tag} />;

  //   case 'React':
  //     return <i className="fab fa-react fa-2x" title={tag} style={react} />;

  //   case 'NodeJS':
  //     return <i className="fab fa-node-js fa-2x" title={tag} style={node} />;

  //   case 'ExpressJS':
  //     return (
  //       <div className="ExpressJS">
  //         <span>Express</span>
  //         <i className="fab fa-js fa-2x" title={tag} />
  //       </div>
  //     );

  //   case 'WordPress':
  //     return <i className="fab fa-wordpress-simple fa-2x" title={tag} />;

  //   default:
  //     return null;
  // };



  // If statement syntax

  // if (tag === 'HTML5') {
  //   return <i className="fab fa-html5 fa-2x" title={tag} style={html5} />;
  // }

  // if (tag === 'CSS3') {
  //   return <i className="fab fa-css3-alt fa-2x" title={tag} style={css3} />;
  // }

  // if (tag === 'JS') {
  //   return <i className="fab fa-js fa-2x" title={tag} />;
  // }

  // if (tag === 'React') {
  //   return <i className="fab fa-react fa-2x" title={tag} style={react} />;
  // }

  // if (tag === 'NodeJS') {
  //   return <i className="fab fa-node-js fa-2x" title={tag} style={node} />;
  // }

  // if (tag === 'ExpressJS') {
  //   return (
  //     <div className="ExpressJS">
  //       <span>Express</span>
  //       <i className="fab fa-js fa-2x" title={tag} />
  //     </div>
  //   );
  // }

  // if (tag === 'WordPress') {
  //   return <i className="fab fa-wordpress-simple fa-2x" title={tag} />;
  // }

  // return null;
};

Icon.defaultProps = {
  tag: PropTypes.string,
};

Icon.propTypes = Icon.defaultProps;

export default Icon;
