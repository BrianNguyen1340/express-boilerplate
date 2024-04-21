/**
 * Updated by Brian Nguyen author on April 21 2024
 */

/** -------------------------------------------- */

import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import asyncExitHook from "async-exit-hook";

import env from "~/configs/environment";
import { CONNECT_DB, CLOSE_DB } from "~/configs/connect.database";
import configCORS from "~/configs/config.cors";
import errorHandlingMiddleware from "~/middlewares/error.hanlder.middleware";
import APIs_V1 from "~/routes/v1";

// chạy server
const START_SERVER = () => {
  // khởi tạo ứng dụng
  const app = express();

  // middleware
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(helmet());
  app.use(morgan("dev"));

  // CORS
  configCORS(app);

  // error handler middleware
  app.use(errorHandlingMiddleware);

  // routes
  APIs_V1(app);

  // port
  const port = env.PORT;
  // hostname
  const hostname = env.HOST_NAME;
  // lắng nghe server chạy trên port nào
  app.listen(port, hostname, () => {
    console.log(`3. Server is running at http://${hostname}:${port}`);
  });

  // thực hiện các tác vụ cleanup trước khi dừng server
  asyncExitHook(() => {
    CLOSE_DB();
  });
};

// chỉ khi kết nối tới database thành công thì mới start server back-end
(async () => {
  try {
    console.log(`1. Connecting to MongoDB Cloud Atlas...`);
    await CONNECT_DB();
    console.log(`2. Connected to MongoDB Cloud Atlas!`);
    START_SERVER();
  } catch (error) {
    console.error(error);
    process.exit(0);
  }
})();
