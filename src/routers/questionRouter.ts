import Router from "@koa/router";
import QuestionController from "../controllers/QuestionController.js";
import QuizController from "../controllers/QuizController.js";

const router = new Router({ prefix: "/questions" });

router.get("/", QuestionController.list);
router.post("/new", QuestionController.create);
router.delete("/:id", QuestionController.deleteQuestion);

export default router;
