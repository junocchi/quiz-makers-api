import Answer from "../models/Answer";
import Question from "../models/Question";
import Quiz from "../models/Quiz";

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
