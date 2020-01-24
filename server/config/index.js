import { config } from 'dotenv';

config();
const PORT = Number(process.env.PORT) || 3000;

const APP_HOSTNAME = process.env.APP_HOSTNAME;

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

const DB_NAME = process.env.DB_NAME;
const DB_HOSTNAME = process.env.DB_HOSTNAME || 'localhost';
const DB_PORT = Number(process.env.DB_PORT) || 27017;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

export {
  PORT,
  APP_HOSTNAME,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  DB_NAME,
  DB_HOSTNAME,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD
};
