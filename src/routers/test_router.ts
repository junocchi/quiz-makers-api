import Router from "@koa/router";
import Test from "../models/Test.js";

const router = new Router({ prefix: "/tests" });

router.get("/", async (ctx, next) => {
  const all = await Test.findAll();
  ctx.body = all;
});

export default router;
