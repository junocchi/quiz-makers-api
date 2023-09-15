import dotenv from "dotenv";
dotenv.config();

import http from "http";

import DBConnection from "./db/DBConnection";

import app from "./app";
import { setupModels } from "./models/setupModels";

const run = async () => {
  await DBConnection.connect();
  await setupModels();

  const port = process.env.PORT || 3000;
  const server = http.createServer(app.callback());
  server.listen(port);

  // Make sure that when the process is terminated, we gracefully
  // close the server, freeing up the port again.
  process.on("SIGTERM", async () => {
    await server.close();
  });
};

run();
