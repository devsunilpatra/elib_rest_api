import { config as conf } from "dotenv";

conf();

const _config = {
  port: process.env.PORT,
  database_url: process.env.MONGO_CONNECTION_STRING,
  env: process.env.NODE_ENV,
  apikey: process.env.API_KEY
};

export const config = Object.freeze(_config);
