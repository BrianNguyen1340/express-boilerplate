/**
 * Updated by Brian Nguyen author on April 21 2024
 */

/** -------------------------------------------- */

class ApiError extends Error {
  constructor(statusCode, message) {
    super(message);

    this.name = "ApiError";
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default ApiError;
