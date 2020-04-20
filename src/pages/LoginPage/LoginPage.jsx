import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import userService from "../../utils/userService";
import SignupForm from "../../components/SingupForm/SignupForm";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      username: "",
      pw: "",
    };
  }

  updateMessage = (msg) => {
    this.setState({ message: msg });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      // Let <App> know a user has signed up!
      this.props.handleSignupOrLogin();
      // Successfully signed up
      this.props.history.push("/");
    } catch (err) {
      // Invalid user data (probably duplicate email)
      console.log(`Error: ${err}`);
    }
  };

  render() {
    return (
      <div className="Login-container">
        <div className="Login-section">
          <h2>LOGIN</h2>
          <div className="form-wrapper">
            <form onSubmit={this.handleSubmit}>
              <div className="per-input">
                <label className="input-header login">USERNAME:</label>
                <div>
                  <input
                    type="username"
                    className="form-control"
                    placeholder="Username"
                    value={this.state.username}
                    name="username"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="per-input">
                <label className="input-header login">PASSWORD:</label>
                <div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={this.state.pw}
                    name="pw"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div>
                <div className="login buttons">
                  <button className="btn btn-info">LOGIN</button>
                  &nbsp;&nbsp;&nbsp;
                  <Link className="btn btn-danger" to="/">
                    CANCEL
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="overlay">
          <h1>
            <span className="half">-O</span>R-
          </h1>
        </div>

        <div className="Signup-section">
          <SignupForm {...this.props} updateMessage={this.updateMessage} />
          <p>{this.state.message}</p>
        </div>
      </div>
    );
  }
}

export default LoginPage;
