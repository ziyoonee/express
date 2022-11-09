const express = require("express");
const responseTime = require("response-time");
const app = express();
const port = 3000;

//클라이언트 요청에 대한 응답시간을 관리하는 미들웨어
app.use(
  responseTime((req, res, time) => {
    console.log(`${req.method} ${req.url} ${time}`);
  })
);

app.get("/", (req, res) => {
  res.send("index");
});

app.listen(port, () => {
  console.log("run server");
});
