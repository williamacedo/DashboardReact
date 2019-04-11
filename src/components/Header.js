import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
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
    </div>
  );
};

export default Header;
