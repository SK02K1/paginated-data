const mongoose = require('mongoose');

const PASSWORD = process.env.PASSWORD;

const initDbConnection = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://sk02k1:${PASSWORD}@paginated-data.b4qpmo0.mongodb.net/paginated-data`,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    console.log(`DB successfully connected`);
  } catch (error) {
    console.log({ PASSWORD });
    console.error(`MongoDB connection failed: ${error.message}`);
  }
};

module.exports = initDbConnection;
