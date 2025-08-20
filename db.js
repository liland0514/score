const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",      // 改成你的 MySQL 帳號
  password: "123456",      // 改成你的 MySQL 密碼
  database: "connecttest_db" // 改成你的資料庫名稱
});

db.connect(err => {
  if (err) {
    console.error("資料庫連線失敗:", err);
    return;
  }
  console.log("✅ MySQL 已連線");
});

module.exports = db;
