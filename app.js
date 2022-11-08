const express = require("express");
const app = express();
const port = 3000;
//라우터
const Router = require("./router");

app.use("/route", Router);

//에러처리 핸들러 미들웨어
app.use((err, req, res, next) => {
  res.status(500).json({
    status: res.statusCode,
    err: err.message,
  });
});

//정적파일
app.use(express.static("public"));
app.use("/static", express.static("public"));

app.get("/", (_, res) => {
  res.send("index");
});

app.listen(port, () => {
  console.log("run server");
});
