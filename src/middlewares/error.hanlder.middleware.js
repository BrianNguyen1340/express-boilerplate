/**
 * Updated by Brian Nguyen author on April 21 2024
 */

/** -------------------------------------------- */

import { StatusCodes as status } from "http-status-codes";

import env from "~/configs/environment";

// middleware xử lý lỗi tập trung trong ứng dụng back-end
const errorHandlingMiddleware = (error, req, res, next) => {
  // nếu dev không cẩn thận thiếu statusCode thì mặc định sẽ trả về statusCode là INTERNAL_SERVER_ERROR (500)
  if (!error.statusCode) {
    error.statusCode = status.INTERNAL_SERVER_ERROR;
  }

  // tạo ra một biến responseError để kiểm soát những gì muốn trả về
  const responeError = {
    statusCode: error.statusCode,
    message: error.message || status[error.statusCode],
    stack: error.stack,
  };

  // chỉ khi môi trường là development thì mới trả về stack trace để dễ dàng debug hơn, còn không thì xóa đi
  if (env.NODE_ENV !== "development") delete responeError.stack;

  // trả responseError về phía front-end
  res.status(responeError.statusCode).json(responeError);
};

export default errorHandlingMiddleware;
