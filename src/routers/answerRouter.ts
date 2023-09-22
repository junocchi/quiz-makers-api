import Router from "@koa/router";
import AnswerController from "../controllers/AnswerController.js";

const router = new Router({ prefix: "/answers" });

router.get("/:question_id/correct", AnswerController.getCorrectAnswer);
router.get("/:question_id", AnswerController.getByQuestionId);
router.post("/:question_id/new", AnswerController.create);

export default router;
