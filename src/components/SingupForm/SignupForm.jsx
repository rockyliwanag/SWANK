import React, { Component } from "react";
import { Link } from "react-router-dom";
import userService from "../../utils/userService";

class SignupForm extends Component {
  state = {
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    passwordConf: "",
    state: "",
    country: "",
  };

  handleChange = (e) => {
    this.props.updateMessage("");
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup(this.state);
      // Let <App> know a user has signed up!
      this.props.handleSignupOrLogin();
      // Successfully signed up
      this.props.history.push("/");
    } catch (err) {
      // Invalid user data (probably duplicate email)
      this.props.updateMessage(err.message);
    }
  };

  isFormInvalid() {
    return !(
      this.state.first_name &&
      this.state.last_name &&
      this.state.username &&
      this.state.email &&
      this.state.password === this.state.passwordConf &&
      this.state.state &&
      this.state.country
    );
  }

  render() {
    return (
      <div>
        <header className="header-footer">
          <h2>SIGN UP</h2>
        </header>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div>
            <label>FIRST NAME</label>
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                value={this.state.first_name}
                name="first_name"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div>
            <label>LAST NAME</label>
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                value={this.state.last_name}
                name="last_name"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div>
            <label>USERNAME</label>
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Username*"
                value={this.state.username}
                name="username"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div>
            <label>E-MAIL ADDRESS</label>
            <div>
              <input
                type="email"
                className="form-control"
                placeholder="E-mail*"
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div>
            <label>PASSWORD</label>
            <div>
              <input
                type="password"
                className="form-control"
                placeholder="Password*"
                value={this.state.password}
                name="password"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div>
            <label>CONFIRM PASSWORD</label>
            <div>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password*"
                value={this.state.passwordConf}
                name="passwordConf"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div>
            <label>STATE</label>
            <div>
              <input
                type="state"
                className="form-control"
                placeholder="State*"
                value={this.state.city}
                name="state"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div>
            <label>COUNTRY</label>
            <div>
              <input
                type="country"
                className="form-control"
                placeholder="Country*"
                value={this.state.country}
                name="country"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div>
            <div>
              <button
                className="btn btn-default"
                disabled={this.isFormInvalid()}
              >
                Sign Up
              </button>
              &nbsp;&nbsp;
              <Link to="/">Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
