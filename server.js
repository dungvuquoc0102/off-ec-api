require("module-alias/register");
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const apiRouter = require("./src/routes/api");
const adminRouter = require("./src/routes/admin");
const db = require("@/configs/db");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(expressLayouts);
app.set("layout", "admin/layouts/default");

app.use("/api/v1", apiRouter);
app.use("/admin", adminRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
