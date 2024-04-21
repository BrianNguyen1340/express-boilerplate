/**
 * Updated by Brian Nguyen author on April 21 2024
 */

/** -------------------------------------------- */

import { Router } from "express";

const router = Router();

const APIs_V1 = async (app) => {
  return app.use("/api/v1", router);
};

export default APIs_V1;
