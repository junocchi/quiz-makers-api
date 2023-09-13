import Router from "@koa/router";
import QuizController from "../controllers/quiz_controller.js";

const router = new Router({ prefix: "/quizzes" });

router.get("/", QuizController.list);
router.post("/new", QuizController.create);

export default router;
