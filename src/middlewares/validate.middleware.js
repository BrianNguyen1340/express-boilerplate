/**
 * Updated by Brian Nguyen author on April 21 2024
 */

/** -------------------------------------------- */

import { StatusCodes as status } from "http-status-codes";

const ValidateMiddleware = (schema) => {
  return async (req, res, next) => {
    const validationOptions = {
      abortEarly: false,
      allowUnknown: true,
      stripUnknown: true,
    };

    try {
      const value = await schema.validateAsync(req.body, validationOptions);
      req.body = value;
      next();
    } catch (error) {
      const errors = [];
      error.details.forEach((error) => {
        errors.push(error.message);
      });
      res.status(status.BAD_REQUEST).json({ errors: errors });
    }
  };
};

export default ValidateMiddleware;
