import request from "supertest";
import { test, expect } from "vitest";

import app from "../../src/app";

test("Hello world works", async () => {
  const response = await request(app.callback()).get("/quizzes");
  expect(response.status).toBe(200);
  expect(response.body.quizzes[0].title).toBe("Test Quiz");
});

test("Checking questions endpoint", async () => {
  const response = await request(app.callback()).get("/questions");
  expect(response.status).toBe(200);
  expect(response.body.questions[0].questionText).toBe("Did this work?");
});

test("Checking answers endpoint", async () => {
  const response = await request(app.callback()).get("/answers");
  expect(response.status).toBe(200);
  expect(response.body.answers[0].answerText).toBe("Yes");
});
