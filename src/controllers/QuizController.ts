import Router from "@koa/router";

import Quiz from "../models/Quiz.js";
import Question from "../models/Question.js";
import {
  QuizApiResponse,
  QuizCreateResponse,
  QuizErrorResponse,
  QuizListResponse,
  QuizDeleteResponse,
} from "../api/QuizApi.js";

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
    ctx.body = response;
  }
};

// removes quiz at id from db. Not named delete due to strict mode.
const deleteQuiz: Router.Middleware = async (ctx) => {
  const id = ctx.params.id;
  try {
    // DELETE FROM quizzes WHERE id = <id>;
    await Quiz.destroy({ where: { id } });
    // ensure the response is in the right shape
    const response: QuizDeleteResponse = {
      message: `Quiz with ID: ${id} deleted`,
    };
    ctx.body = response;
  } catch (err) {
    console.error(err);
    ctx.response.status = 500; //internal server error
    const response: QuizErrorResponse = {
      err: `Unable to delete quiz with id: ${id}`,
    };
    ctx.body = response;
  }
};

const QuizController = {
  create,
  list,
  find,
  deleteQuiz,
};

export default QuizController;
