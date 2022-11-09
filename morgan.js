const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3000;

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log")
);

//HTTP 요청에 대한 로그를 관리하는 미들웨어
app.use(morgan("combined", { stream: accessLogStream }));

app.get("/", (req, res) => {
  res.send("index");
});

app.listen(port, () => {
  console.log("run server");
});
