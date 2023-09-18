import request from "supertest";
import { test, expect } from "vitest";

import app from "../../src/app";

test("Hello world works", async () => {
  const response = await request(app.callback()).get("/quizzes");
  expect(response.status).toBe(200);
  expect(response.body.quizzes[0].title).toBe("Test Quiz");
});
