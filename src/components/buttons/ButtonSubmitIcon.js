import React from 'react';
import PropTypes from 'prop-types';

const ButtonSubmitIcon = ({ text, icon, styled }) => {
	return (
      <button className={"ui button " + styled}>
	        <i className={"icon " + icon}></i>
	        {text}
	  </button>
	);
}

ButtonSubmitIcon.propTypes = {
	text: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	styled: PropTypes.string
}

export default ButtonSubmitIcon;