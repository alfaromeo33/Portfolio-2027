import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri && process.env.NODE_ENV === "production") {
  // Keep the portfolio usable before the database credentials are configured.
  console.info("MONGODB_URI is not configured; static portfolio data is active.");
}

const globalForMongo = globalThis as typeof globalThis & {
  mongoClientPromise?: Promise<MongoClient>;
};

export function getMongoClient() {
  if (!uri) throw new Error("MONGODB_URI must be configured to use the database.");
  if (!globalForMongo.mongoClientPromise) {
    globalForMongo.mongoClientPromise = new MongoClient(uri).connect();
  }
  return globalForMongo.mongoClientPromise;
}

export async function getPortfolioDatabase() {
  const client = await getMongoClient();
  return client.db(process.env.MONGODB_DB || "portfolio");
}
