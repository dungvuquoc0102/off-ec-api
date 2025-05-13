const express = require("express");
const fs = require("fs").promises;

//init
const router = express.Router();

router.get("/me", (req, res) => {
  return res.send("Current User Info");
});

module.exports = router;
