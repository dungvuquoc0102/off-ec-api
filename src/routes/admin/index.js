const express = require("express");
const authRouter = require("./auth.route");
const productRouter = require("./product.route");

const router = express.Router();

router.use("/auth", authRouter);
router.use("/products", productRouter);

module.exports = router;
