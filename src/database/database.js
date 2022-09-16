import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const mongoClient = new MongoClient(process.env.DATABASE_URI);

try {
    await mongoClient.connect();
} catch (err) {
    console.error(err.message);
}

const database = mongoClient.db('mosca_atacadista');

export default database;