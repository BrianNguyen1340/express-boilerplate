/**
 * Updated by Brian Nguyen author on April 21 2024
 */

/** -------------------------------------------- */

import { MongoClient, ServerApiVersion } from "mongodb";

import env from "./environment";

// khởi tạo một đối tượng databaseInstance ban đầu là null (vì chúng ta chưa kết nối)
let databaseInstance = null;

const MONGO_DB_URI = env.MONGO_DB_URI;
const DATABASE_NAME = env.DATABASE_NAME;

// khởi tạo một đối tượng mongoClientInstance để connect tới MongoDB
const mongoClientInstance = new MongoClient(MONGO_DB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// kết nối tới database
export const CONNECT_DB = async () => {
  // gọi kết nối tới MongoDB Atlas với URI đã khai báo trong thân của mongoClientInstance
  await mongoClientInstance.connect();

  // kết nối thành công thì lấy ra database theo tên và gán ngược nó lại vào biến databaseInstance đã khai báo trước đó
  databaseInstance = mongoClientInstance.db(DATABASE_NAME);
};

// function GET_DB (không async) này có nhiệm vụ export ra cái dataInstance sau khi đã connect thành công tới MongoDB để chúng ta có thể sử dụng nhiều nơi trong code
// lưu ý phải đảm bảo chỉ gọi function GET_DB này sau khi đã kết nối thành công tới MongoDB
export const GET_DB = () => {
  if (!databaseInstance) throw new Error("Must connect to database first!");

  return databaseInstance;
};

export const CLOSE_DB = async () => {
  await mongoClientInstance.close();
};
