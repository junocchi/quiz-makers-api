import dotenv from "dotenv";
dotenv.config();

import DBConnection from "./db/DBConnection.js";

import app from "./app.js";
import { setupModels } from "./models/setupModels.js";

const init = async () => {
  await DBConnection.connect();
  await setupModels();
};

init().then(() => {
  const port = process.env.PORT || 3000;
  app.listen(port);
});
