const express = require("express");
const cors = require("cors");
const usersRoute = require("./routes/users");

const app = express();
const PORT = 3000;

// 中介層
app.use(cors());    
app.use(express.json());

// 路由
app.use("/users", usersRoute);

// 首頁
app.get("/", (req, res) => {
  res.send("✅ Node.js + MySQL API 正常運作中");
});

// 啟動伺服器
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
