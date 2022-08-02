const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

const user = require("./routes/user");

app.use(cors());
app.use(express.json());

// 유저 router
app.use("/user", user);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`당신의 서버가 ${port}포트에서 실행됩니다.`);
});
