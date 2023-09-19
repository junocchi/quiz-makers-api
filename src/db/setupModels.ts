import DBConnection from "./DBConnection.js";
import Answer, { init as answerInit } from "../models/Answer.js";
import Quiz, { init as quizInit } from "../models/Quiz.js";
import Question, { init as questionInit } from "../models/Question.js";

const initModels = () => {
  quizInit();
  questionInit();
  answerInit();
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
};

export const setupModels = async () => {
  initModels();
  setupAssociations();

  return DBConnection.connection().sync();
};
