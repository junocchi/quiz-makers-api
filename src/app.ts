import Koa from "koa";
import { bodyParser } from "@koa/bodyparser";

import quizRouter from "./routers/quizRouter.js";
import questionRouter from "./routers/questionRouter.js";
import answerRouter from "./routers/answerRouter.js";
import attemptRouter from "./routers/attemptRouter.js";

const app = new Koa();

app.use(bodyParser());

app.use(quizRouter.routes());
app.use(questionRouter.routes());
app.use(answerRouter.routes());
app.use(attemptRouter.routes());

export default app;
