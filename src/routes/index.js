const express = require("express");
const authRouter = require("./auth.route");
const postsRouter = require("./posts.route");

const router = express.Router();

router.use("", authRouter);
router.use("", postsRouter);

module.exports = router;
