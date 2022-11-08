const express = require("express");
const compression = require("compression");
const app = express();
const port = 3000;

//응답 본문 압축
//app.use(compression());

//응답 본문이 큰 경우 압축
app.use("/api/big", compression());

app.listen(port, () => {
  console.log("run server");
});
