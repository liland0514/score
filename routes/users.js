const express = require("express");
const router = express.Router();
const db = require("../db");

// 讀取所有使用者
router.get("/", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// 新增使用者
router.post("/", (req, res) => {
  const { name, email } = req.body;
  db.query("INSERT INTO users (name, email) VALUES (?, ?)", [name, email], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ id: result.insertId, name, email });
  });
});

// 更新使用者
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  db.query("UPDATE users SET name=?, email=? WHERE id=?", [name, email, id], err => {
    if (err) return res.status(500).json({ error: err });
    res.json({ id, name, email });
  });
});

// 刪除使用者
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM users WHERE id=?", [id], err => {
    if (err) return res.status(500).json({ error: err });
    res.json({ success: true });
  });
});

module.exports = router;
