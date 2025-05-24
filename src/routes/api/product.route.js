const express = require("express");
const productController = require("@/controllers/api/product.controller");

const productRouter = express.Router();

productRouter.get("/", productController.getList);
productRouter.post("/", productController.create);

module.exports = productRouter;
