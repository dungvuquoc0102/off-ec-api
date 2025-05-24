const productController = require("@/controllers/admin/product.controller");
const express = require("express");
const productRouter = express.Router();

productRouter.get("/", productController.getList);

module.exports = productRouter;
