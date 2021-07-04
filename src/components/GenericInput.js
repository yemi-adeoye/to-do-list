import PropTypes from 'prop-types';

const GenericInput = ({
  type,
  fieldName,
  id,
  onChangeHandler,
  onKeyDownHandler,
  error,
  value,
  label,
  isChecked,
}) => {
  let checked = isChecked ? 'checked' : null;
  return (
    <>
      <span className='error'> {error} </span>
      <label htmlFor={fieldName}> {label} </label>
      <input
        type={type}
        name={fieldName}
        id={id}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
        value={value}
        checked={checked}
      />
    </>
  );
};

GenericInput.propTypes = {
  type: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  error: PropTypes.string,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};

export default GenericInput;
