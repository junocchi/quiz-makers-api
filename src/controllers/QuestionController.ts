import Router from "@koa/router";
import Question, { QuestionCreationAttributes } from "../models/Question";

const validateQuestion = (data: any): data is QuestionCreationAttributes => {
  const valid =
    typeof data?.question_text === "string" &&
    typeof data?.is_correct === "boolean" &&
    !Number.isNaN(parseInt(data?.quiz_id));

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
  ctx.body = all;
};

const QuestionController = {
  create,
  list,
};

export default QuestionController;
