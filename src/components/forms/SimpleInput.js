import React from "react";
import PropTypes from "prop-types";

const SimpleInput = ({
  textLabel,
  type,
  name,
  placeholder,
  textChange,
  textValue
}) => {
  return (
    <div className="field">
      <label>{textLabel}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={event => textChange(event.target.value)}
        value={textValue}
      />
    </div>
  );
};

SimpleInput.propTypes = {
  textLabel: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  textChange: PropTypes.func.isRequired,
  textValue: PropTypes.string.isRequired
};

export default SimpleInput;
