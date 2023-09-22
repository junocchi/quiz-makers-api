import request from "supertest";
import { test, expect } from "vitest";

import app from "../../src/app";

test("Hello world works", async () => {
  const response = await request(app.callback()).get("/quizzes");
  expect(response.status).toBe(200);
  console.log("response: ", response.body);
  expect(response.body.quizzes[0].title).toBe("Test Quiz");
});

test("Checking questions endpoint", async () => {
  const response = await request(app.callback()).get("/questions");
  expect(response.status).toBe(200);
  expect(response.body.questions[0].questionText).toBe("Did this work?");
});

test("Checking answers endpoint", async () => {
  const response = await request(app.callback()).get("/answers/1");
  expect(response.status).toBe(200);
  expect(response.body.answers[0].answerText).toBe("Yes");
});

test("Getting the correct answer", async () => {
  const response = await request(app.callback()).get("/answers/1/correct");
  expect(response.status).toBe(200);
  expect(response.body.id).toBe(1);
});

test("Deleting a quiz", async () => {
  const response = await request(app.callback()).delete("/quizzes/1");
  expect(response.status).toBe(200);
  expect(response.body.message).toBe("Quiz with ID: 1 deleted");
});
