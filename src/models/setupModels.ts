import DBConnection from "../db/DBConnection";
import { seedDb } from "../db/seedDb";
import Answer, { init as answerInit } from "./Answer";
import Quiz, { init as quizInit } from "./Quiz";
import Question, { init as questionInit } from "./Question";

const initModels = () => {
  quizInit();
  questionInit();
  answerInit();
};

const setupAssociations = async () => {
  Quiz.hasMany(Question, { onDelete: "CASCADE" });
  Question.belongsTo(Quiz, {
    constraints: true,
    foreignKeyConstraint: true,
  });

  Question.hasMany(Answer, { onDelete: "CASCADE" });
  Answer.belongsTo(Question, {
    constraints: true,
    foreignKeyConstraint: true,
  });
};

export const setupModels = async () => {
  initModels();
  setupAssociations();

  await DBConnection.connection().sync();
  if (process.env.NODE_ENV === "development") {
    await seedDb();
  }
};
