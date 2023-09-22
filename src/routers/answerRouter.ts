import Router from "@koa/router";
import AnswerController from "../controllers/AnswerController.js";

const router = new Router({ prefix: "/answers" });

router.get("/:questionId/correct", AnswerController.getCorrectAnswer);
router.get("/:questionId", AnswerController.getByQuestionId);
router.post("/:questionId/new", AnswerController.create);

export default router;
