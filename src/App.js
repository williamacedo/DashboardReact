import React, { Component } from "react";
import Header from "./components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Home";
import Users from "./components/Dashboard/Users";
import Jobs from "./components/Dashboard/Jobs";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import CreateJob from "./components/Dashboard/Jobs/CreateJob"; 

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <div className="ui container">
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/signup" exact component={SignUp} />
              <Route path="/dash" component={Dashboard} />
              <Route path="/users" component={Users} />
              <Route path="/jobs" exact component={Jobs} />
              <Route path="/jobs/create" component={CreateJob} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
