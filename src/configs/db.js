const mysql2 = require("mysql2/promise");

const db = mysql2.createPool({
  host: "127.0.0.1",
  port: 3306,
  user: "dungvq",
  password: "123456",
  database: "off-ec-api_dev",
});

(async () => {
  try {
    const [rows, fields] = await db.query("select 1");
    if (rows) {
      console.log("Connect DB succeed");
    }
  } catch (error) {
    console.log(error.message || "Connect DB failed");
  }
})();

module.exports = db;
