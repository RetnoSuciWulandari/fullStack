const express = require("express");

let router = express.Router();

router.post("/signup", function(req, res, next) {
  res.send("I am in POST signup");
});

module.exports = router;
