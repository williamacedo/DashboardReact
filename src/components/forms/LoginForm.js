import React from 'react';
import SimpleInput from './SimpleInput';
import ButtonSubmit from '../buttons/ButtonSubmit';
import ButtonSubmitIcon from '../buttons/ButtonSubmitIcon';
import RegularButtonWithIcon from '../buttons/RegularButtonWithIcon';
import Alert from '../Notifications/Alert';
import { handleEmail, handlePass, closeAlert, signIn } from '../../actions/authActions';
import { connect } from 'react-redux';

const LoginForm = props => {

	let onSubmit = (e) => {
		e.preventDefault();
		props.signIn(props.email, props.password);
	}

	return (
		<div className="ui center aligned grid">
		  <div className="column ten wide">
				{props.authMessage != '' &&
					<Alert text={props.authMessage} type={props.authType} onPress={props.closeAlert} />
				}		  				
		    <form className="ui form" onSubmit={(e) => onSubmit(e)}>
		      <div className="ui stacked segment">
			    <SimpleInput
			    	textLabel="Email"
			    	type="email"
			    	name="email"
			    	placeholder="Your Email"
			    	textChange={props.handleEmail}
			    	textValue={props.email}
			    />
				<SimpleInput
			    	textLabel="Password"
			    	type="password"
			    	name="password"
			    	placeholder="Your Password"
			    	textChange={props.handlePass}
			    	textValue={props.password}
				/>
		    	<div className="field">
					<ButtonSubmitIcon icon="sign in alternate" text="Login" styled="large fluid green" />
		    	</div>
		    	<div className="field">
		          <RegularButtonWithIcon
		            text="Sign Up"
		            styled="teal large fluid"
		            icon="signup"
		            link="/signup"
		          />			    
		    	</div>	    	
		      </div>


		    </form>
		  </div>
		</div>	
	);	
}

const mapToStateToProps = state => {
	return {
		email: state.auth.email,
		password: state.auth.password,
		authMessage: state.auth.authMessage,
		authType: state.auth.authType

	}
}

export default connect(mapToStateToProps, { handleEmail, handlePass, closeAlert, signIn })(LoginForm);