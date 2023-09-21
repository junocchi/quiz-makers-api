import { seedDb } from "./db/seedDb.js";
import DBConnection from "./db/DBConnection.js";
import { setupModels } from "./db/setupModels.js";
import dotenv from "dotenv";
dotenv.config();

async function runSeed() {
  await DBConnection.connect();
  await setupModels();
  try {
    await seedDb();
    console.log("Seed data has been added to the database.");
  } catch (error) {
    console.error("Error seeding the database:", error);
  }
}

runSeed();
