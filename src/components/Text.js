import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ text, id, className }) => {
  return (
    <span id={id} className={className}>
      {text}
    </span>
  );
};

Text.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
};

export default Text;
