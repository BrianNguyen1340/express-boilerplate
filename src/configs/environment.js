/**
 * Updated by Brian Nguyen author on April 21 2024
 */

/** -------------------------------------------- */

import "dotenv/config";

const env = {
  NODE_ENV: process.env.NODE_ENV,
  HOST_NAME: process.env.HOST_NAME,
  PORT: process.env.PORT,
  MONGO_DB_URI: process.env.MONGO_DB_URI,
  DATABASE_NAME: process.env.DATABASE_NAME,
  JWT_SECRET_KEYS: process.env.JWT_SECRET_KEYS,
  REACT_URI: process.env.REACT_URI,
  EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
  EMAIL_USERNAME: process.env.EMAIL_USERNAME,
  EMAIL_PORT: process.env.EMAIL_PORT,
  EMAIL_HOST: process.env.EMAIL_HOST,
  CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_SECRET_KEY: process.env.CLOUDINARY_SECRET_KEY,
  CLOUDINARY_API_ENV_VAR: process.env.CLOUDINARY_API_ENV_VAR,
};

export default env;
