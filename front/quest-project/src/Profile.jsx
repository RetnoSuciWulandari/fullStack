import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        email: "homer.simpson@wildcodeschool.fr",
        name: "Homer",
        lastname: "Simpson"
      }
    };
  }

  render() {
    return (
      <div>
        <div className="profile">
          <h3>Your Profile</h3>
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
                marginTop: "1rem"
              }}
            >
              SIGN OUT
            </Button>
          </Link>
        </div>
        <List>
          <ListItem>
            <ListItemText
              primary="Full Name"
              secondary={`${this.state.profile.name} ${this.state.profile.lastname}`}
              style={{
                color: "#fcb571"
              }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Email"
              secondary={this.state.profile.email}
              style={{
                color: "#fcb571"
              }}
            />
          </ListItem>
        </List>
      </div>
    );
  }
}

export default Profile;
