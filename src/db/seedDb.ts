import Answer from "../models/Answer.js";
import Question from "../models/Question.js";
import Quiz from "../models/Quiz.js";
import Attempt from "../models/Attempt.js";

export const seedDb = async () => {
  await Quiz.truncate({ cascade: true, restartIdentity: true });
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

  await Attempt.create({
    userName: "Josh",
    quizId: quiz.id,
    score: 3,
  });
};
