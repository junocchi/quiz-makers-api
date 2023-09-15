import Koa from "koa";
import { bodyParser } from "@koa/bodyparser";

import quizRouter from "./routers/quizRouter";
import questionRouter from "./routers/questionRouter";
import answerRouter from "./routers/answerRouter";

const app = new Koa();

app.use(bodyParser());

app.use(quizRouter.routes());
app.use(questionRouter.routes());
app.use(answerRouter.routes());

export default app;
