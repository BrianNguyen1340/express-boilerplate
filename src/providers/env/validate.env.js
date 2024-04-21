/**
 * Updated by Brian Nguyen author on April 21 2024
 */

/** -------------------------------------------- */

import { cleanEnv, str, port, num } from "envalid";

const validateEnv = () => {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    HOST_NAME: str(),
    PORT: port({ default: 1340 }),
    MONGO_DB_URI: str(),
    DATABASE_NAME: str(),
    JWT_SECRET_KEYS: str(),
    REACT_URI: str(),
    EMAIL_PASSWORD: str(),
    EMAIL_USERNAME: str(),
    EMAIL_PORT: str(),
    EMAIL_HOST: str(),
    CLOUDINARY_NAME: str(),
    CLOUDINARY_API_KEY: num(),
    CLOUDINARY_SECRET_KEYL: str(),
    CLOUDINARY_API_ENV_VAR: str(),
  });
};

export default validateEnv;
