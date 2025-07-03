const mongoose = require('mongoose');
require('dotenv').config(); 

const mongoConnectString = process.env.MONGO_URI;

const connectMongoDB = async () => {
    console.log("trying to connect to mongo ")
  try {
    await mongoose.connect(mongoConnectString);
    console.log('Successfully connected to MongoDB');
  } catch (err) {
    console.log('Error in MongoDB Connection: ', err.message);
  }
};

module.exports = connectMongoDB;
