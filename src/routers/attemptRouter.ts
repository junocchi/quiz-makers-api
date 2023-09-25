import Router from "@koa/router";
import AttemptController from "../controllers/AttemptController.js";

const router = new Router({ prefix: "/attempts" });

router.get("/ping", AttemptController.ping);
router.post("/new", AttemptController.create);
router.get("/", AttemptController.list);

export default router;
