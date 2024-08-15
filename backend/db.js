// MONGOOSE SETUP

import mongoose from 'mongoose'

const PORT = process.env.PORT || 9000
const mongodbURL = process.env.MONGO_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(mongodbURL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log(`MongoDB connected successfully at ${PORT}`);
      } catch (error) {
        console.error(`Error: ${error}`);
      }
}

export default connectDB;



