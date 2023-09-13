import DBConnection from "../db/DBConnection.js";
import { seedDb } from "../db/seedDb.js";
import { init as testInit } from "./Test.js";
import { init as quizInit } from "./Quiz.js";
import { init as questionInit } from "./Question.js";

export const setupModels = async () => {
  await quizInit();
  await questionInit();
  await testInit();

  await DBConnection.connection().sync();
  if (process.env.NODE_ENV === "development") {
    await seedDb();
  }
};
