import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ id, className, value, onClickHandler }) => {
  return (
    <span
      className={'material-icons ' + className}
      onClick={onClickHandler}
      id={id}
      value={value}
    >
      delete
    </span>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};
export default Button;
