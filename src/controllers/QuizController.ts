import Router from "@koa/router";

import Quiz from "../models/Quiz";
import Question from "../models/Question";
import {
  QuizApiResponse,
  QuizCreateResponse,
  QuizErrorResponse,
  QuizListResponse,
} from "../api/QuizApi";

const create: Router.Middleware = async (ctx) => {
  console.log("Inside Quizcontroller:");
  try {
    const quiz = await Quiz.create({ title: ctx.request.body.title });
    const response: QuizCreateResponse = { id: quiz.id };
    ctx.body = response;
  } catch (err) {
    console.error(err);
    ctx.response.status = 500;
    const response: QuizErrorResponse = { err: "Unable to create new quiz" };
    ctx.body = response;
  }
};

const list: Router.Middleware = async (ctx) => {
  const all = await Quiz.findAll();
  const response: QuizListResponse = { quizzes: all };
  ctx.body = response;
};

const find: Router.Middleware = async (ctx) => {
  const id = ctx.params.id;
  try {
    const quiz = await Quiz.findOne({
      where: {
        id: id,
      },
    });
    if (quiz) {
      const questions = await Question.findAll({ where: { quizId: id } });

      const response: QuizApiResponse = {
        id: quiz.id,
        title: quiz.title,
        questions: questions.map((q) => ({
          id: q.id,
          question_text: q.questionText,
        })),
      };
      ctx.body = response;
    } else {
      ctx.status = 404;
      const response: QuizErrorResponse = { err: "Quiz not found" };
      ctx.body = response;
    }
  } catch (err) {
    console.error(err);
    ctx.response.status = 500;
    const response: QuizErrorResponse = { err: "Quiz not found" };
    ctx.body = { err: "Unable to find quiz with id: ", id };
  }
};

const QuizController = {
  create,
  list,
  find,
};

export default QuizController;
