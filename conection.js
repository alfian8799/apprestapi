const mysql = require("mysql");

// membuat koneki kedata base
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "vianuniversity",
});

db.connect((err) => {
  if (err) {
    console.log("Terjadi kesalahan ke basis data", err);
    return;
  }
  console.log("Terhubung kebasis data");
});
module.exports = db;
