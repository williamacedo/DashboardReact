import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
  	if(!this.props.auth.uid) return <Redirect to='/' />;
    return <div>Home</div>;
  }
}

const mapToStateToProps = state => {
	return {
		auth: state.firebase.auth
	}
}

export default connect(mapToStateToProps, {})(Home);
