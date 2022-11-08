const express = require("express");

const app = express();
const port = 3000;

//HTTP 요청 body를 해석
// app.use(
//   express.json({
//     limit: "50mb",
//   })
// );

// app.use(
//   express.urlencoded({
//     extended: false,
//   })
// );

const jsonParser = express.json();
const urlencodedParser = express.urlencoded({
  extended: false,
});

app.post("/login", urlencodedParser, (req, res) => {
  res.send("welcome, " + req.body.username);
});

app.post("/api/users", jsonParser, (req, res) => {
  res.send("welcome, " + req.body.username);
});

app.listen(port, () => {
  console.log("run server");
});
