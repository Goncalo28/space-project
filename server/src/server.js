const http = require("http");
const app = require("./app");
require("dotenv").config();

const { loadPlanetsData } = require("./models/planets.model");
const { loadLaunchData } = require("./models/launches.model");
const { connectMongo } = require("./services/mongo");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

const startServer = async () => {
  await connectMongo();
  await loadPlanetsData();
  await loadLaunchData();
  server.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
};

startServer();
