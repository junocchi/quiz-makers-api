import Router from "@koa/router";

import QuizController from "../controllers/QuizController.js";

const router = new Router({ prefix: "/quizzes" });

router.get("/", QuizController.list);
router.post("/new", QuizController.create);
router.get("/:id", QuizController.find);
router.delete("/:id", QuizController.deleteQuiz);

export default router;
