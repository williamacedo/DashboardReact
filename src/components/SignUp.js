import React, { Component } from 'react';
import SimpleInput from './forms/SimpleInput';
import ButtonSubmit from './buttons/ButtonSubmit';
import ButtonSubmitIcon from './buttons/ButtonSubmitIcon';
import Alert from './Notifications/Alert';
import { handleEmailRegister, handlePasswordRegister, handleName, signUp, closeAlert } from '../actions/authActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class SignUp extends Component {

	handleSubmit = (e) => {
		e.preventDefault();
		if(this.props.name != '' && this.props.emailRegister != '' && this.props.passwordRegister != '') {
			this.props.signUp(this.props.name, this.props.email, this.props.password);
		}
	}

	render() {
		if (this.props.registerStatus === true) return <Redirect to="/" />;
		return (
			<div className="ui center aligned grid">
			  <div className="column ten wide">
				{this.props.authMessage != '' &&
					<Alert text={this.props.authMessage} type={this.props.authType} onPress={this.props.closeAlert} />
				}				  
			    <form className="ui form" onSubmit={(e) => this.handleSubmit(e)}>
			      <div className="ui stacked segment">
				    <SimpleInput
				    	textLabel="Name"
				    	type="text"
				    	name="name"
				    	placeholder="Your Name"
				    	textChange={this.props.handleName}
				    	textValue={this.props.name}
				    />			      
				    <SimpleInput
				    	textLabel="Email"
				    	type="email"
				    	name="email"
				    	placeholder="Your Email"
				    	textChange={this.props.handleEmailRegister}
				    	textValue={this.props.email}
				    />
					<SimpleInput
				    	textLabel="Password"
				    	type="password"
				    	name="password"
				    	placeholder="Your Password"
				    	textChange={this.props.handlePasswordRegister}
				    	textValue={this.props.password}
					/>
			    	<div className="field">
						<ButtonSubmitIcon icon="sign in alternate" text="Register" styled="large fluid green" />
			    	</div>		    	
			      </div>

			      <div class="ui error message"></div>

			    </form>
			  </div>
			</div>		 				
		);
	}
}

const mapToStateToProps = state => {
	return {
		name: state.auth.name,
		email: state.auth.emailRegister,
		password: state.auth.passwordRegister,
		registerStatus: state.auth.registerStatus,
		authMessage: state.auth.authMessage,
		authType: state.auth.authType
	}
}

export default connect(mapToStateToProps, { handleEmailRegister, handlePasswordRegister, handleName, signUp, closeAlert })(SignUp);