import Koa from "koa";
import { bodyParser } from "@koa/bodyparser";
import testRouter from "./routers/test_router.js";
import quizRouter from "./routers/quiz_router.js";
import questionRouter from "./routers/question_router.js";

const app = new Koa();

app.use(bodyParser());
app.use(testRouter.routes());
app.use(quizRouter.routes());
app.use(questionRouter.routes());

export default app;
