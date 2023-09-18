import { afterEach, beforeEach } from "vitest";
import dotenv from "dotenv";

import DBConnection from "../src/db/DBConnection";
import { seedDb } from "../src/db/seedDb";
import { setupModels } from "../src/db/setupModels";

dotenv.config();

beforeEach(async () => {
  await DBConnection.connect();
  await setupModels();
  await seedDb();
});
