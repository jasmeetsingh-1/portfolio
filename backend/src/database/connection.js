const mongoose = require('mongoose');

const mongoConnectString = "mongodb+srv://portfolioUser:portfolioUser@portfoliodata.2ivz0.mongodb.net/";

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
