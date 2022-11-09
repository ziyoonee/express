const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const port = 3000;

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, new Date().valueOf() + path.extname(file.originalname)),
});

const upload = multer({ storage: storage });

app.use(express.json({ limit: "50mb" }));

//multi-part/form-data 데이터를 처리하기 위한 미들웨어
//클라이언트에서 전송한 파일을 쉽게 업로드할 수 있게 해주는 미들웨어
app.post("/profile", upload.single("avatar"), (req, res, next) => {
  console.log(req.file);
  console.log(req.body);
});

app.post("/photos/upload", upload.array("photos", 12), (req, res, next) => {
  console.log(req.files);
});

app.listen(port, () => {
  console.log("run server");
});
