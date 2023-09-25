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

test("Deleting a question", async () => {
  const response = await request(app.callback()).delete("/questions/1");
  expect(response.status).toBe(200);
  expect(response.body.message).toBe("Question with ID: 1 deleted");
});

test("List all attempts", async () => {
  const response = await request(app.callback()).get("/attempts");
  expect(response.status).toBe(200);
  expect(response.body.attempts[0].id).toBe(1);
});

test("Create an attempt", async () => {
  const req = await request(app.callback()).post("/attempts/new").send({
    userName: "Hilda",
    quizId: 1,
    score: 1,
  });
  const response = await request(app.callback()).get("/attempts");
  const body = response.body.attempts;
  expect(req.status).toBe(200);
  expect(body[body.length - 1].userName).toBe("Hilda");
});
