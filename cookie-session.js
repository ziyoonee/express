const express = require("express");
const cookieSession = require("cookie-session");
const app = express();
const port = 3000;

/**
 * 쿠키에 클라이언트의 세션 데이터를 저장한다.
 * - 브라우저의 최대 쿠키 크기 내에서만 저장가능하지만, 서버 측 DB와 별도의 리소스가 필요하지 않다는 장점이 있다.
 * - 특정 부하 분산 시나리오를 단순화할 수 있다.
 */
app.use(
  cookieSession({
    name: "session",
    keys: [
      /* secret Key */
    ],
    maxAge: 24 * 60 * 60 * 1000, //24시간 유지
  })
);

app.listen(port, () => {
  console.log("run server");
});
