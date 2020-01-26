import mongoose from 'mongoose';
import seeder from '../seeder';
import { DB_NAME, DB_HOSTNAME, DB_PASSWORD, DB_PORT, DB_USERNAME } from '../config';

const dbUrl = `mongodb://${DB_HOSTNAME}:${DB_PORT}`;

const config = {
  dbName: DB_NAME,
  user: DB_USERNAME,
  pass: DB_PASSWORD,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  reconnectTries: 15,
  reconnectInterval: 500,
  connectTimeoutMS: 10000,
};

export default async function createDB() {
  try {
    const db = await mongoose.connect(dbUrl, config);

    await seeder();

    return db;
  } catch (e) {
    console.error('MongoDB connection failed', e);
  }
}
