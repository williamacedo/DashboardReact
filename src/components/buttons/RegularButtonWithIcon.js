import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const RegularButtonWithIcon = ({ styled, text, icon, link }) => {
  return (
    <Link className={"ui button " + styled} to={link}>
      <i className={"icon " + icon} />
      {text}
    </Link>
  );
};

RegularButtonWithIcon.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  styled: PropTypes.string,
  link: PropTypes.string
};

export default RegularButtonWithIcon;
