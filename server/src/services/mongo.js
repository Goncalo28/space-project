const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_URL;

mongoose.connection.once("open", () => console.log("mongodb connected"));
mongoose.connection.on("error", (error) => console.error(error));

const connectMongo = async () => {
  await mongoose.connect(MONGO_URL);
};

const disconnectMongo = async () => {
  await mongoose.disconnect();
};

module.exports = {
  connectMongo,
  disconnectMongo,
};
