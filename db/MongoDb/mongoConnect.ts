import mongoose from 'mongoose';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const options = {};

// uncomment in the future as we might use the database session strategy

// declare global {
//   var _mongoClientPromise: Promise<MongoClient> | undefined;
// }

// let client: MongoClient;
// let clientPromise: Promise<MongoClient>;

// if (process.env.NODE_ENV === 'development') {
//   // Use a global variable to preserve the value across module reloads caused by HMR (Hot Module Replacement).
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
//   // In production mode, it's best to not use a global variable.
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
// }

// Connect to Mongoose
const dbConnect = async (): Promise<void> => {
  console.log(mongoose.connection.readyState >= 1);
  if (mongoose.connection.readyState >= 1) return;
  await mongoose.connect(uri as string, options);

  // 0: disconnected
  // 1: connected
  // 2: connecting
  // 3: disconnecting
};

// Export the client and dbConnect functions
export default dbConnect;
