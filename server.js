const express = require("express");
const router = require("./src/routes");

//init
const app = express();

//middleware
app.use(express.static("pulbic"));
app.use(express.json());

//router
app.use("/api/v1", router);

//listen
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
