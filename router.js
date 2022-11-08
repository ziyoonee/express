const express = require("express");
const router = express.Router();

router
  .route("/")
  .post((_, res) => {
    res.send("post route!");
  })
  .get((_, res) => {
    res.send("get route!");
  });

module.exports = router;
