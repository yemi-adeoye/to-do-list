import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { id, className, text } = props.headerProps;
  return (
    <header id={id} className={className}>
      {text}
    </header>
  );
};

Header.propTypes = {
  headerProps: PropTypes.object.isRequired,
};
export default Header;
