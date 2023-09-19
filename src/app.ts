import Koa from "koa";
import { bodyParser } from "@koa/bodyparser";

import quizRouter from "./routers/quizRouter.js";
import questionRouter from "./routers/questionRouter.js";
import answerRouter from "./routers/answerRouter.js";

const app = new Koa();

app.use(bodyParser());

app.use(quizRouter.routes());
app.use(questionRouter.routes());
app.use(answerRouter.routes());

export default app;
