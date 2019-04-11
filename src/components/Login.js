import React, { Component } from "react";
import SimpleInput from './forms/SimpleInput';
import ButtonSubmit from './buttons/ButtonSubmit';
import ButtonSubmitIcon from './buttons/ButtonSubmitIcon';
import RegularButtonWithIcon from './buttons/RegularButtonWithIcon';
import { connect } from 'react-redux';
import { handleEmail, handlePass } from '../actions/authActions';

class Login extends Component {
  render() {
    return ( 
		<div className="ui center aligned grid">
		  <div className="column ten wide">
		    <form className="ui form">
		      <div className="ui stacked segment">
			    <SimpleInput
			    	textLabel="Email"
			    	type="email"
			    	name="email"
			    	placeholder="Your Email"
			    	textChange={this.props.handleEmail}
			    	textValue={this.props.email}
			    />
				<SimpleInput
			    	textLabel="Password"
			    	type="password"
			    	name="password"
			    	placeholder="Your Password"
			    	textChange={this.props.handlePass}
			    	textValue={this.props.password}
				/>
		    	<div className="field">
					<ButtonSubmitIcon icon="sign in alternate" text="Login" styled="large fluid green" />
		    	</div>
		    	<div className="field">
		          <RegularButtonWithIcon
		            text="Login with Google"
		            styled="google plus large fluid"
		            icon="google plus"
		            link="/signup"
		          />			    	
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

		      <div class="ui error message"></div>

		    </form>
		  </div>
		</div>		 	
   	);
  }
}

const mapToStateToProps = state => {
	return {
		email: state.auth.email,
		password: state.auth.password
	}
}

export default connect(mapToStateToProps, { handleEmail, handlePass })(Login);
