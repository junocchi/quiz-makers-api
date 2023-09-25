import { ForeignKey } from "sequelize";
import Question from "../models/Question.js";

export type QuizApiQuestion = {
  id: number;
  question_text: string;
};

export type QuizApiResponse = {
  id: number;
  title: string;
  questions: QuizApiQuestion[];
};

export type QuizErrorResponse = {
  err: string;
};

export type QuestionErrorResponse = {
  err: string;
};

export type QuizCreateResponse = { id: number };

export type AttemptCreateResponse = {
  id: number;
  userName: string;
  quizId: number;
  score: number;
};

export type Quiz = {
  id: number;
  title: string;
};
export type QuizListResponse = {
  quizzes: Quiz[];
};

export type AnswerCreateResponse = {
  message: string;
};

export type QuestionListResponse = {
  questions: Question[];
};

export type QuestionApiResponse = {
  id: number;
  questionText: string;
  quizId: ForeignKey<Quiz["id"]>;
};

export type QuizDeleteResponse = {
  message: string;
};

export type QuestionDeleteResponse = {
  message: string;
};

export type CorrectAnswerResponse = {
  message: string;
};
