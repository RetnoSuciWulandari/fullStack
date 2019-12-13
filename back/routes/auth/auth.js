const express = require("express");
const connection = require("../../helpers/db.js");

let router = express.Router();

router.post("/signup", function(req, res, next) {
  let { flash, passwordVerification, open, ...registrationData } = req.body;
  connection.query(
    "INSERT INTO users SET ?",
    registrationData,
    (error, result) => {
      if (error) {
        console.log(error);
        res.status(500).json({ flash: error.message });
        return;
        //res.end();
      }
      console.log(result);
      res.status(200).json({ flash: "User has been signed up!" });
      next();
      //res.send("Your form has been submitted!");
    }
  );
});

router.post("/signin", function(req, res, next) {
  connection.query(
    `SELECT email, password FROM users WHERE email LIKE '${req.body.email}' AND password LIKE '${req.body.password}'`,
    (error, result) => {
      if (error) {
        console.log(req.body, error);
        res.status(500).json({ flash: error.message });
      } else {
        if (result.length === 1) {
          console.log(result, result.length);
          res.status(200).json({ flash: "User has been signed in!" });
        } else {
          console.log(result.length);
          res
            .status(500)
            .json({ flash: "Email and password have to be matched!" });
        }
      }
    }
  );
});

module.exports = router;
