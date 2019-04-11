import React from "react";
import PropTypes from "prop-types";

const ButtonSubmit = ({ text, styled }) => {
  return (
    <button type="submit" className={"ui button " + styled}>
      {text}
    </button>
  );
};

ButtonSubmit.propTypes = {
  text: PropTypes.string.isRequired,
  styled: PropTypes.string
};

export default ButtonSubmit;
