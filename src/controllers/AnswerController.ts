import * as Router from "@koa/router";
import Answer, {
  AnswerCreationAttributes,
  AnswerAttributes,
} from "../models/Answer.js";
import { AnswerCreateResponse, CorrectAnswerResponse } from "../api/QuizApi.js";

const getByQuestionId: Router.Middleware = async (ctx) => {
  try {
    const questionId = ctx.params.questionId;
    if (!questionId) {
      throw new Error("No question_id parameter found");
    }

    const answers = await Answer.findAll({
      where: { questionId: questionId },
    });
    ctx.body = { questionId: questionId, answers };
  } catch (err) {
    console.error(err);
    ctx.response.status = 500;
    const errMessage = `Unable to find answers for question with id ${ctx.params.question_id}`;
    ctx.body = { err: errMessage };
  }
};

const validateAnswer = (data: any): data is AnswerCreationAttributes => {
  const valid = typeof data?.answerText === "string" && !Number.isNaN(parseInt);

  if (!valid) console.log(data);

  return valid;
};

const create: Router.Middleware = async (ctx) => {
  try {
    const data = ctx.request.body;
    if (!validateAnswer(data)) throw new Error("Invalid data");

    const answer = await Answer.create(data);
    ctx.body = { id: answer.id };

    const response: AnswerCreateResponse = {
      message: `Answer ${answer.id} (${answer.isCorrect}) for question ${answer.questionId} created.`,
    };
    ctx.body = response;
  } catch (err) {
    console.log(err);
    ctx.response.status = 500;
    ctx.body = { err: "Unable to create new answer" };
  }
};

const getCorrectAnswer: Router.Middleware = async (ctx) => {
  const questionId = ctx.params.questionId;
  if (!questionId) {
    throw new Error("No question_id parameter found");
  }
  const answer = await Answer.findOne({
    where: { questionId: questionId, isCorrect: true },
  });

  // const response: CorrectAnswerResponse = {
  //   message: `correct answer: ${answer.answerText}`,
  // };

  ctx.body = answer;
};

const AnswerController = {
  create,
  validateAnswer,
  getByQuestionId,
  getCorrectAnswer,
};

export default AnswerController;
