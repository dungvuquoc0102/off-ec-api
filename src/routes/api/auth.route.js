const express = require("express");
const authRouter = express.Router();

authRouter.get("/me", (req, res) => {
  return res.send("Current User Info");
});

module.exports = authRouter;
