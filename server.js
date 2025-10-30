const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// Route test agar Railway tahu app aktif
app.get("/", (req, res) => {
  res.send("Backend Donat Homemade 🍩 berjalan!");
});

// Endpoint pesanan
app.post("/orders", (req, res) => {
  const { nama, nohp, jumlah, catatan } = req.body;

  if (!nama || !nohp || !jumlah) {
    return res.status(400).json({ message: "Data tidak lengkap!" });
  }

  const sql = "INSERT INTO orders (nama, nohp, jumlah, catatan) VALUES (?, ?, ?, ?)";
  db.query(sql, [nama, nohp, jumlah, catatan], (err, result) => {
    if (err) {
      console.error("Error insert:", err);
      return res.status(500).json({ message: "Gagal menyimpan pesanan!" });
    }
    res.json({ message: "Pesanan berhasil dikirim!" });
  });
});

// ✅ Hanya 1 app.listen — penting banget untuk Railway
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server berjalan di port ${PORT}`));
