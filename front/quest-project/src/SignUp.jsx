import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordVerification: "",
      name: "",
      lastname: "",
      flash: "",
      open: false
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

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
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
        res => this.setState({ flash: res.flash }),
        err => this.setState({ flash: err.flash })
      )
      .then(this.handleClick);
  };

  render() {
    return (
      <div>
        {/* <h1>{JSON.stringify(this.state)}</h1> */}
        {/* <form onSubmit={this.handleSubmit}> */}

        <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
          <h2>Sign Up!</h2>
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
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />

          {/* <input
            onChange={this.updatePasswordField}
            value={this.state.password}
            type="password"
            name="password"
          /> */}

          <TextField
            onChange={this.updatePasswordField}
            value={this.state.password}
            type="password"
            name="password"
            id="outlined-password-input"
            label="Password"
            variant="outlined"
            autoComplete="current-password"
            style={{ marginTop: "1rem" }}
          />

          {/* <input
            onChange={this.updatepasswordVerificationField}
            value={this.state.passwordVerification}
            type="password"
            name="password"
          /> */}

          <TextField
            onChange={this.updatepasswordVerificationField}
            value={this.state.passwordVerification}
            type="password"
            name="password"
            id="outlined-password-input"
            label="Password Verification"
            variant="outlined"
            style={{ marginTop: "1rem" }}
          />

          {/* <input
            onChange={this.updateNameField}
            value={this.state.name}
            type="text"
            name="text"
          /> */}

          <TextField
            onChange={this.updateNameField}
            value={this.state.name}
            type="text"
            name="text"
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            style={{ marginTop: "1rem" }}
          />

          {/* <input
            onChange={this.updateLastnameField}
            value={this.state.lastname}
            type="text"
            name="text"
          /> */}

          <TextField
            onChange={this.updateLastnameField}
            value={this.state.lastname}
            type="text"
            name="text"
            id="outlined-basic"
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
            SUBMIT
          </Button>
          <Snackbar
            open={this.state.open}
            autoHideDuration={6000}
            onClose={this.handleClose}
            ContentProps={{
              "aria-describedby": "message-id"
            }}
            message={<span id="message-id">{this.state.flash}</span>}
          />
        </form>
      </div>
    );
  }
}

export default SignUp;
