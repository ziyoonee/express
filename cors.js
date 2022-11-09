const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

const corsOptions = {
  origin: "http://example.com",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get("/test", (req, res) => {
  res.json({
    msg: "cors enable",
  });
});

app.listen(port, () => {
  console.log("run server");
});
