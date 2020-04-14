import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import userService from "../../utils/userService";
import tokenService from "../../utils/tokenService";
import "./App.css";

/*------ Components ------*/
import Header from "../../components/Header/Header";

/*------ Pages ------*/
// import SignupPage from '../SignupPage/SignupPage';
import LoginPage from "../LoginPage/LoginPage";

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
        </Switch>
      </div>
    );
  }
}

export default App;
