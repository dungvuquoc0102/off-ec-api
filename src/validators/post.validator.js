const { checkSchema } = require("express-validator");
const handleValidationErrors = require("./handleValidationErrors");

exports.createPost = [
  checkSchema({
    title: {},
    description: {},
    content: {},
  }),
  handleValidationErrors,
];

exports.updatePost = [
  checkSchema({
    title: {},
    description: {},
    content: {},
  }),
  handleValidationErrors,
];
