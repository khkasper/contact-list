import mongoose from 'mongoose';

const MONGO_DB_URL = 'mongodb://mongo:27017/contacts';

const connectToDatabase = (
  mongoDatabaseURI = MONGO_DB_URL,
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;
