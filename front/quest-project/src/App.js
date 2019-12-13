import React, { useState } from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import "./App.css";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Profile from "./Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";

function App() {
  const [flash, setFlash] = useState("");
  const [open, setOpen] = useState(false);

  const setFlashMessage = flash => {
    setFlash(flash);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <MuiThemeProvider>
      <Grid container alignItems="center" style={{ height: "100%" }}>
        <Snackbar
          open={open}
          onClose={handleClose}
          autoHideDuration={5000}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">{flash}</span>}
        />
        <Grid item xs={12}>
          <Paper elevation={4} style={{ margin: 32 }}>
            <Grid
              container
              alignItems="center"
              justify="center"
              alignContent="center"
            >
              <Grid item xs={12} sm={6} style={{ textAlign: "center" }}>
                <img
                  src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png"
                  alt="HomerSimpsons"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Router>
                  <Switch>
                    <Route exact path="/">
                      <SignIn
                        setFlashMessage={setFlashMessage}
                        handleOpen={handleOpen}
                      />
                    </Route>
                    <Route path="/signin">
                      <SignIn
                        setFlashMessage={setFlashMessage}
                        handleOpen={handleOpen}
                      />
                    </Route>
                    <Route path="/signup">
                      <SignUp
                        setFlashMessage={setFlashMessage}
                        handleOpen={handleOpen}
                      />
                    </Route>
                    <Route path="/profile">
                      <Profile
                        setFlashMessage={setFlashMessage}
                        handleOpen={handleOpen}
                      />
                    </Route>
                  </Switch>
                </Router>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
}

export default App;
