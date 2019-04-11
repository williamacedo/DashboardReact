import React, { Component } from "react";
import { connect } from 'react-redux';
import LoginForm from './forms/LoginForm';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  render() {
  	if(this.props.auth.uid) return <Redirect to='/dash' />;
    return ( 
			<div>
				<LoginForm />
			</div>	 	
   	);
  }
}

const mapToStateToProps = state => {
	return {
		auth: state.firebase.auth
	}
}

export default connect(mapToStateToProps, { })(Login);
