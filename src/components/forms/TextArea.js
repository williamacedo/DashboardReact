import React from "react";
import PropTypes from "prop-types";

const TextArea = ({ labelText, placeholder, textChange, textValue }) => {
  return (
    <div className="field">
      <label>{labelText}</label>
      <textarea
        placeholder={placeholder}
        onChange={event => textChange(event.target.value)}
        value={textValue}
      />
    </div>
  );
};

TextArea.propTypes = {
  labelText: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  textChange: PropTypes.func.isRequired,
  textValue: PropTypes.string.isRequired
};

export default TextArea;
