/**
 * Updated by Brian Nguyen author on April 21 2024
 */

/** -------------------------------------------- */

class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

export default HttpError;
