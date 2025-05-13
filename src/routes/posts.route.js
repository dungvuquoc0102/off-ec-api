const express = require("express");
const fs = require("fs").promises;

//init
const router = express.Router();
const router2 = express.Router();
const DB_PATH = "./db.json";

router2.use("/posts", router);

router.get("/", (req, res) => {
  return res.send("Get Lists");
});

router.post("/", (req, res) => {
  const jsonDb = fs.readFile(DB_PATH, "utf-8");

  return res.send("Post List");
});

module.exports = router2;
