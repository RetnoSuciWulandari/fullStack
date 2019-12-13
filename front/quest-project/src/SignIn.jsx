import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        password: ""
      }
    };
  }

  updateEmailField = event => {
    const email = { ...this.state.user, email: event.target.value };
    this.setState({ user: email });
  };

  updatePasswordField = event => {
    const password = { ...this.state.user, password: event.target.value };
    this.setState({ user: password });
  };

  handleSubmit = event => {
    //console.log(this.state.user);
    event.preventDefault();
    fetch("/auth/signin", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(this.state.user)
    })
      .then(res => res.json())
      .then(
        res => this.props.setFlashMessage(res.flash),
        err => this.props.setFlashMessage(err.flash)
      )
      .then(this.props.handleOpen)
      .then(this.props.history.push("/profile"));
  };

  render() {
    //console.log(this.props);
    return (
      <div>
        <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
          <h2>Welcome back!</h2>
          <TextField
            onChange={this.updateEmailField}
            value={this.state.user.email}
            type="email"
            name="email"
            label="Email"
            variant="outlined"
          />

          <TextField
            onChange={this.updatePasswordField}
            value={this.state.user.password}
            type="password"
            name="password"
            label="Password"
            variant="outlined"
            autoComplete="current-password"
            style={{ marginTop: "1rem" }}
          />

          <Button
            variant="contained"
            color="primary"
            style={{
              marginTop: "1rem"
            }}
            type="submit"
          >
            SIGN IN
          </Button>
        </form>
        <Link
          to="/signup"
          style={{
            textDecoration: "none"
          }}
        >
          <Button
            variant="outlined"
            color="primary"
            style={{
              marginLeft: "1rem",
              marginBottom: "1rem"
            }}
          >
            SIGN UP
          </Button>
        </Link>
      </div>
    );
  }
}

export default withRouter(SignIn);
