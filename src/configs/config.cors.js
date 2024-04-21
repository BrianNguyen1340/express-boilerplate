/**
 * Updated by Brian Nguyen author on April 21 2024
 */

/** -------------------------------------------- */

import env from "./environment";

const configCORS = (app) => {
  app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", env.REACT_URI);
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With, content-type"
    );
    res.setHeader("Access-Control-Allow-Credentials", "true");
    next();
  });
};

export default configCORS;
