import mongoose from 'mongoose'
import { DB_NAME, DB_HOSTNAME, DB_PASSWORD, DB_PORT, DB_USERNAME } from '../config';

const dbUrl = `mongodb://${DB_HOSTNAME}:${DB_PORT}`

const config = {
  dbName: DB_NAME,
  user: DB_USERNAME,
  pass: DB_PASSWORD,
  useNewUrlParser: true,
  useUnifiedTopology: true
};


export default async function createDB() {
  try {
    console.log(dbUrl, config)
    const db = await mongoose.connect(dbUrl, config);
    return db;
  } catch (e) {
    console.error(e);
    console.error('MongoDB connection failed');
  }
}
