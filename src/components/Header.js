import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ id, className, text }) => {
  return (
    <header id={id} className={className}>
      {text}
    </header>
  );
};

Header.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};
export default Header;
