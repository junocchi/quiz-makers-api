import Answer from "../models/Answer.js";
import Question from "../models/Question.js";
import Quiz from "../models/Quiz.js";

export const seedDb = async () => {
  await Quiz.truncate({ cascade: true });
  const quiz = await Quiz.create({ title: "Test Quiz" });
  const question = await Question.create({
    quizId: quiz.id,
    questionText: "Did this work?",
  });
  Answer.create({
    questionId: question.id,
    answerText: "Yes",
    isCorrect: true,
  });
  await Answer.create({
    questionId: question.id,
    answerText: "No",
    isCorrect: false,
  });
};
