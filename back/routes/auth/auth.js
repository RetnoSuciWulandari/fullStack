const express = require("express");
const connection = require("../../helpers/db.js");

let router = express.Router();

router.post("/signup", function(req, res, next) {
  let { flash, passwordconf, ...registrationData } = req.body;
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
      res.send("Your form has been submitted!");
    }
  );
});

module.exports = router;
