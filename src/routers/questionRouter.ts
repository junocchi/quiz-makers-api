import Router from "@koa/router";
import QuestionController from "../controllers/QuestionController.js";

const router = new Router({ prefix: "/questions" });

router.get("/", QuestionController.list);
router.post("/new", QuestionController.create);

export default router;
