import DBConnection from "./DBConnection.js";
import Answer, { init as answerInit } from "../models/Answer.js";
import Quiz, { init as quizInit } from "../models/Quiz.js";
import Question, { init as questionInit } from "../models/Question.js";
import Attempt, { init as attemptInit } from "../models/Attempt.js";

const initModels = () => {
  quizInit();
  questionInit();
  answerInit();
  attemptInit();
};

const setupAssociations = async () => {
  Quiz.hasMany(Question, { onDelete: "CASCADE", foreignKey: "quizId" });
  Question.belongsTo(Quiz, {
    constraints: true,
    foreignKeyConstraint: true,
    foreignKey: "quizId",
  });

  Question.hasMany(Answer, { onDelete: "CASCADE", foreignKey: "questionId" });
  Answer.belongsTo(Question, {
    constraints: true,
    foreignKeyConstraint: true,
    foreignKey: "questionId",
  });

  Quiz.hasMany(Attempt, { onDelete: "CASCADE", foreignKey: "quizId" });
  Attempt.belongsTo(Quiz, {
    constraints: true,
    foreignKeyConstraint: true,
    foreignKey: "quizId",
  });
};

export const setupModels = async () => {
  initModels();
  setupAssociations();

  return DBConnection.connection().sync();
};
