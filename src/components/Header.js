import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';

const Header = props => {
 if(props.auth.uid) {
    return (
      <div className="ui menu">
        <div className="header item">
          <Link to="/">Admin</Link>
        </div>
        <NavLink className="item" to="/dash">
          Dashboard
        </NavLink>
        <NavLink className="item" to="/users">
          Users
        </NavLink>
        <NavLink className="item" to="/jobs">
          Jobs
        </NavLink>
        <div className="right menu">
        <div className="item">
          <button onClick={() => props.logout()} className="ui red button">
            Logout
          </button>
        </div>
        </div>
      </div> 
    );  
 } else {
  return (
      <div className="ui menu">
        <div className="header item">
          <Link to="/">Admin</Link>
        </div>
      </div>
    );
 }
};

const mapToStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
}

export default connect(mapToStateToProps, { logout })(Header);
