import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import userService from "../../utils/userService";
import tokenService from "../../utils/tokenService";
import "./App.css";

/*------ Components ------*/
import Header from "../../components/Header/Header";

/*------ Pages ------*/
// import SignupPage from '../SignupPage/SignupPage';
import HomePage from "../HomePage/HomePage"
import LoginPage from "../LoginPage/LoginPage";
import InventoryPage from "../InventoryPage/InventoryPage";
import AddItemsPage from "../AddItemsPage/AddItemsPage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
    };
  }

  /*------ Handlers ------*/
  handleSignupOrLogin = () => {
    this.setState({
      user: userService.getUser(),
    });
  };

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  render() {
    console.log(this.state.user);
    return (
      <div className="App">
        <Header user={this.state.user} handleLogout={this.handleLogout} />
        <Switch>
          <Route
            exact
            path="/login"
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={({ history }) => (
              <HomePage
                history={history}
              />
            )}
          />
          <Route
            exact
            path="/inventory"
            render={({ history }) => (
              <InventoryPage
                history={history}
              />
            )}
          />
          <Route
            exact
            path="/new-item"
            render={({ history }) => (
              <AddItemsPage
                history={history}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
