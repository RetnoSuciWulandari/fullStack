import React from "react";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordconf: "",
      name: "",
      lastname: "",
      flash: ""
    };
    this.updateEmailField = this.updateEmailField.bind(this);
  }

  updateEmailField(event) {
    this.setState({ email: event.target.value });
  }

  updatePasswordField = event => {
    this.setState({ password: event.target.value });
  };

  updatePasswordconfField = event => {
    this.setState({ passwordconf: event.target.value });
  };

  updateNameField = event => {
    this.setState({ name: event.target.value });
  };

  updateLastnameField = event => {
    this.setState({ lastname: event.target.value });
  };

  // componentDidUpdate() {
  //   console.log(this.state.flash);
  // }

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
      );
  };

  render() {
    return (
      <div>
        <h1>{JSON.stringify(this.state)}</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.updateEmailField}
            value={this.state.email}
            type="email"
            name="email"
          />
          <br />
          <input
            onChange={this.updatePasswordField}
            value={this.state.password}
            type="password"
            name="password"
          />
          <br />
          <input
            onChange={this.updatePasswordconfField}
            value={this.state.passwordconf}
            type="password"
            name="password"
          />
          <br />
          <input
            onChange={this.updateNameField}
            value={this.state.name}
            type="text"
            name="text"
          />
          <br />
          <input
            onChange={this.updateLastnameField}
            value={this.state.lastname}
            type="text"
            name="text"
          />
          <br />
          <button>
            <input type="submit" value="Submit" />
          </button>
        </form>
      </div>
    );
  }
}

export default SignUp;
