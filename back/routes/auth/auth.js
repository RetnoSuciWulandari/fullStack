const express = require("express");
const connection = require("../../helpers/db.js");

let router = express.Router();

router.post("/signup", function(req, res, next) {
  let registrationData = req.body;
  connection.query(
    "INSERT INTO users SET ?",
    registrationData,
    (error, result) => {
      if (error) {
        console.log(error);
        res.status(500).end();
        res.end();
      } else {
        console.log(result);
        res.send("Your form has been submitted!");
      }
    }
  );
});

module.exports = router;
