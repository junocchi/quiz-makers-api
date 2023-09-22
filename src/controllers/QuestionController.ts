import Router from "@koa/router";
import Question, { QuestionCreationAttributes } from "../models/Question.js";
import {
  QuestionListResponse,
  QuizApiResponse,
  QuizListResponse,
} from "../api/QuizApi.js";

const validateQuestion = (data: any): data is QuestionCreationAttributes => {
  const valid =
    typeof data?.questionText === "string" &&
    !Number.isNaN(parseInt(data?.quizId));

  if (!valid) console.log(data);

  return valid;
};

const create: Router.Middleware = async (ctx) => {
  try {
    const data = ctx.request.body;
    if (!validateQuestion(data)) throw new Error("Invalid data");

    const question = await Question.create(data);

    ctx.body = { id: question.id };
  } catch (err) {
    console.error(err);
    ctx.response.status = 500;
    ctx.body = { err: "Unable to create new question" };
  }
};

const list: Router.Middleware = async (ctx) => {
  const all = await Question.findAll();
  const response: QuestionListResponse = { questions: all };
  ctx.body = response;
};

const QuestionController = {
  create,
  list,
};

export default QuestionController;
