import Router from "@koa/router";
import Question, { QuestionCreationAttributes } from "../models/Question.js";
import {
  QuestionDeleteResponse,
  QuestionListResponse,
  QuestionErrorResponse,
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

const deleteQuestion: Router.Middleware = async (ctx) => {
  const id = ctx.params.id;
  const quizId = ctx.params.quizId;
  try {
    // DELETE FROM questions WHERE id = <id>
    await Question.destroy({ where: { id } });
    // return message in correct shape
    const response: QuestionDeleteResponse = {
      message: `Question with ID: ${id} deleted`,
    };
    ctx.body = response;
  } catch (err) {
    console.log(err);
    ctx.response.status = 500; //internal server error
    const response: QuestionErrorResponse = {
      err: `Unable to delete question with Id: ${id}`,
    };

    ctx.body = response;
  }
};

const QuestionController = {
  create,
  list,
  deleteQuestion,
};

export default QuestionController;
