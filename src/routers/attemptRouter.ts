import Router from "@koa/router";
import AttemptController from "../controllers/AttemptController.js";

const router = new Router({ prefix: "/attempts" });

router.get("/ping", AttemptController.ping);
router.post("/new", AttemptController.create);
router.get("/", AttemptController.list);
router.get("/:quizId/top/:x", AttemptController.listTopX);

export default router;
