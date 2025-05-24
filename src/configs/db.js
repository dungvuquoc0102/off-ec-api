const mysql2 = require("mysql2");

const db = mysql2.createPool({
  host: "127.0.0.1",
  port: 3306,
  user: "dungvq",
  password: "123456",
  database: "off-ec-api_dev",
});

db.getConnection((err) => {
  if (err) {
    console.log("--> Connect DB failed:", err.message);
  } else {
    console.log("--> Connect DB succeeded");
  }
});

module.exports = db.promise;
