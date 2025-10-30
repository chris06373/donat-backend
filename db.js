const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "mysql.hostinger.com", // Ganti sesuai panel Hostinger
  user: "u795518683_donat",
  password: "Yunita123",
  database: "u795518683_donat"
});

db.connect((err) => {
  if (err) {
    console.error("❌ Gagal konek ke MySQL:", err.message);
  } else {
    console.log("✅ Terhubung ke MySQL!");
  }
});

module.exports = db;
