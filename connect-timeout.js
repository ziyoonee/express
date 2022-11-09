const express = require("express");
const timeout = require("connect-timeout");
const app = express();
const port = 3000;

//클라이언트의 요청에 대해서 지정된 시간동안 응답을 못하는 경우 연결을 종료하는 기능을 제공하는 미들웨어
//라우터별로 타임아웃을 지정하는것을 권장
app.use(timeout("5s"));

app.get("/", (req, res) => {});

app.listen(port, () => {
  console.log("run server");
});
