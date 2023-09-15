import * as Router from "@koa/router";
import Answer from "../models/Answer";

const getByQuestionId: Router.Middleware = async (ctx) => {
  try {
    const questionId = ctx.params.question_id;
    if (!questionId) {
      throw new Error("No question_id parameter found");
    }

    const answers = await Answer.findAll({
      where: { questionId: questionId },
    });
    ctx.body = { question_id: questionId, answers };
  } catch (err) {
    console.error(err);
    ctx.response.status = 500;
    const errMessage = `Unable to find answers for question with id ${ctx.params.question_id}`;
    ctx.body = { err: errMessage };
  }
};

const getCorrectAnswer: Router.Middleware = () => {};

const AnswerController = {
  getByQuestionId,
  getCorrectAnswer,
};

export default AnswerController;
