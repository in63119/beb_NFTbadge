const https = require("https");
const fs = require("fs");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

const user = require("./routes/user");
const {getSheets} = require("./googleApi/getSheets");

app.use(cors());
app.use(express.json());

// 유저 router
app.use("/user", user);
getSheets();

https
  .createServer({
      key: fs.readFileSync(__dirname + '/key.pem', 'utf-8'),
      cert: fs.readFileSync(__dirname + '/cert.pem', 'utf-8'),
    },
    app.get("/", (req, res) => {
      res.send("Hello World!");
    })
  )
.listen(port, () => {
  console.log(`당신의 서버가 ${port}포트에서 실행됩니다.`);
});
