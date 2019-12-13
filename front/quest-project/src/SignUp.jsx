import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordVerification: "",
      name: "",
      lastname: ""
    };
    this.updateEmailField = this.updateEmailField.bind(this);
  }

  updateEmailField(event) {
    this.setState({ email: event.target.value });
  }

  updatePasswordField = event => {
    this.setState({ password: event.target.value });
  };

  updatepasswordVerificationField = event => {
    this.setState({ passwordVerification: event.target.value });
  };

  updateNameField = event => {
    this.setState({ name: event.target.value });
  };

  updateLastnameField = event => {
    this.setState({ lastname: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    //console.log("Your form has been submitted: ", this.state);
    fetch("/auth/signup", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(
        res => this.props.setFlashMessage(res.flash),
        err => this.props.setFlashMessage(err.flash)
      )
      .then(this.props.handleOpen)
      .then(this.props.history.push("/"));
  };

  render() {
    return (
      <div>
        {/* <h1>{JSON.stringify(this.state)}</h1> */}
        {/* <form onSubmit={this.handleSubmit}> */}

        <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
          <h2>Hello!</h2>
          {/* <input
            onChange={this.updateEmailField}
            value={this.state.email}
            type="email"
            name="email"
          /> */}
          <TextField
            onChange={this.updateEmailField}
            value={this.state.email}
            type="email"
            name="email"
            label="Email"
            variant="outlined"
          />

          <TextField
            onChange={this.updatePasswordField}
            value={this.state.password}
            type="password"
            name="password"
            label="Password"
            variant="outlined"
            autoComplete="current-password"
            style={{ marginTop: "1rem" }}
          />

          <TextField
            onChange={this.updatepasswordVerificationField}
            value={this.state.passwordVerification}
            type="password"
            name="password"
            label="Password Verification"
            variant="outlined"
            style={{ marginTop: "1rem" }}
          />

          <TextField
            onChange={this.updateNameField}
            value={this.state.name}
            type="text"
            name="text"
            label="First Name"
            variant="outlined"
            style={{ marginTop: "1rem" }}
          />

          <TextField
            onChange={this.updateLastnameField}
            value={this.state.lastname}
            type="text"
            name="text"
            label="Last Name"
            variant="outlined"
            style={{ marginTop: "1rem" }}
          />

          {/* <button>
            <input type="submit" value="Submit" />
          </button> */}

          <Button
            variant="contained"
            color="primary"
            style={{
              marginTop: "1rem"
            }}
            type="submit"
          >
            SIGN UP
          </Button>
        </form>
        <Link
          to="/signin"
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
            SIGN IN
          </Button>
        </Link>
      </div>
    );
  }
}

export default withRouter(SignUp);
