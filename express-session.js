const express = require("express");
const expressSession = require("express-session");
const fileStore = require("session-file-store")(expressSession);
const app = express();
const port = 3000;

/**
 * 세션관리 미들웨어
 * cookie-session과 다르게 데이터를 서버에 저장하기 때문에 쿠키보다 안전하고
 * 많은 데이터를 저장할수  있다.
 * - store 옵션이 없으면 세션은 서버 메모리에 저장된다
 * - 메모리는 휘발성이기 때문에 서버를 재시작하면 저장되어 있는 세션 정보가 모두 초기화된다.
 * - 고로 세션을 안전하게 관리하기 위해서는 메모리보다 DB 혹은 파일로 저장하는것이 좋다.
 */
// app.use(
//   expressSession({
//     secret: "secret Key", // 암호화 키
//     resave: false, // 세션에 변경 사항이 없어도 항상 다시 저장할지
//     saveUninitialized: true, // 초기화되지 않은 세션을 스토어(저장소)에 강제로 저장할지
//     cookie: {
//       //세션 쿠키 설정
//       httpOnly: true,
//       secure: true,
//       maxAge: 60000, // ms 단위
//     },
//   })
// );

/**
 * 세션정보를 파일로 저장해서 관리
 * - sessions 폴더에 세션 정보가 저장된다.
 * - 저장된 세션정보는 req.session으로 접근할 수 있다.
 */

app.use(
  expressSession({
    secret: "secret Key", // 암호화 키
    resave: false, // 세션에 변경 사항이 없어도 항상 다시 저장할지
    saveUninitialized: true, // 초기화되지 않은 세션을 스토어(저장소)에 강제로 저장할지
    cookie: {
      //세션 쿠키 설정
      httpOnly: true,
      secure: true,
      maxAge: 60000, // ms 단위
    },
    store: new fileStore(), //세션 저장소로 fileStore를 사용
  })
);

app.get("/", (req, res) => {
  console.log(req.session);
  res.send(req.session);
});

app.post("/login", express.json(), (req, res, next) => {
  const { email } = req.body;
  req.session.email = email;
  req.session.is_logined = true;
  req.session.save((err) => {
    if (err) throw err;
    res.redirect("/");
  });
});

app.get("/logout", (req, res, next) => {
  req.session.destroy();
  res.redirect("/");
});

app.listen(port, () => {
  console.log("run server");
});
