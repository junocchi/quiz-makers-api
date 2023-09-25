import Attempt, { AttemptCreationAttributes } from "../models/Attempt.js";
import { AttemptCreateResponse } from "../api/QuizApi.js";
import Router from "@koa/router";

const validateAttempt = (data: any): data is AttemptCreationAttributes => {
  const valid =
    typeof data?.userName === "string" && !Number.isNaN(data?.quizId);
  if (!valid) console.log(data);

  return valid;
};

const create: Router.Middleware = async (ctx) => {
  try {
    const data = ctx.request.body;
    if (!validateAttempt(data)) throw new Error("Invalid data");

    const attempt = await Attempt.create(data);

    const response: AttemptCreateResponse = {
      id: attempt.id,
      userName: attempt.userName,
      quizId: attempt.quizId,
      score: attempt.score,
    };
    ctx.body = response;
  } catch (err) {
    console.log(err);
    ctx.response.status = 500;
    ctx.body = { err: "unable to create attempt" };
  }
};

const ping: Router.Middleware = async (ctx) => {
  ctx.body = { message: "pong! " };
};

const AttemptController = {
  create,
  ping,
};

export default AttemptController;
