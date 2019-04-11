import React from 'react';
import PropTypes from 'prop-types'

const Alert = ({ text, type, onPress }) => {
	return (
		<div className={"ui message " + type}>
		  <i className="close icon" onClick={onPress}></i>
		  <div className="header">
		    {text}
		  </div>
		</div>		
	);
}

Alert.propTypes = {
	text: PropTypes.string.isRequired,
	type: PropTypes.string,
	onPress: PropTypes.func.isRequired
};

export default Alert;