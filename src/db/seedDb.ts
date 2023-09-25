import Answer from "../models/Answer.js";
import Question from "../models/Question.js";
import Quiz from "../models/Quiz.js";

export const seedDb = async () => {
  await Quiz.truncate({ cascade: true, restartIdentity: true });
  const quiz = await Quiz.create({ title: "Test Quiz" });

  const question = await Question.create({
    quizId: quiz.id,
    questionText: "Did this work?",
  });
  Answer.create({
    questionId: question.id,
    answerText: "Yes",
    isCorrect: true,
  });
  await Answer.create({
    questionId: question.id,
    answerText: "No",
    isCorrect: false,
  });

  const geographyQuiz = await Quiz.create({ title: "Geography Quiz" });
  // geography question 1
  const geographyQuestion1 = await Question.create({
    quizId: geographyQuiz.id,
    questionText: "What is the capital of France?",
  });
  await Answer.create({
    questionId: geographyQuestion1.id,
    answerText: "Paris",
    isCorrect: true,
  });
  await Answer.create({
    questionId: geographyQuestion1.id,
    answerText: "Berlin",
    isCorrect: false,
  });
  await Answer.create({
    questionId: geographyQuestion1.id,
    answerText: "Rome",
    isCorrect: false,
  });

  // geography question 2
  const geographyQuestion2 = await Question.create({
    quizId: geographyQuiz.id,
    questionText: "Which river is the longest in the world?",
  });
  await Answer.create({
    questionId: geographyQuestion2.id,
    answerText: "Amazon River",
    isCorrect: false,
  });
  await Answer.create({
    questionId: geographyQuestion2.id,
    answerText: "Nile River",
    isCorrect: true,
  });
  await Answer.create({
    questionId: geographyQuestion2.id,
    answerText: "Mississippi River",
    isCorrect: false,
  });

  // geography question 3
  const geographyQuestion3 = await Question.create({
    quizId: geographyQuiz.id,
    questionText: "Which country is known as the Land of the Rising Sun?",
  });
  await Answer.create({
    questionId: geographyQuestion3.id,
    answerText: "China",
    isCorrect: false,
  });
  await Answer.create({
    questionId: geographyQuestion3.id,
    answerText: "South Korea",
    isCorrect: false,
  });
  await Answer.create({
    questionId: geographyQuestion3.id,
    answerText: "Japan",
    isCorrect: true,
  });

  // geography question 4
  const geographyQuestion4 = await Question.create({
    quizId: geographyQuiz.id,
    questionText: "What is the largest desert in the world?",
  });
  await Answer.create({
    questionId: geographyQuestion4.id,
    answerText: "Antarctic Desert",
    isCorrect: true,
  });
  await Answer.create({
    questionId: geographyQuestion4.id,
    answerText: "Sahara Desert",
    isCorrect: false,
  });
  await Answer.create({
    questionId: geographyQuestion4.id,
    answerText: "Arabian Desert",
    isCorrect: false,
  });

  // geography question 5
  const geographyQuestion5 = await Question.create({
    quizId: geographyQuiz.id,
    questionText:
      "In which continent is the Amazon Rainforest primarily located?",
  });
  await Answer.create({
    questionId: geographyQuestion5.id,
    answerText: "Asia",
    isCorrect: false,
  });
  await Answer.create({
    questionId: geographyQuestion5.id,
    answerText: "South America",
    isCorrect: true,
  });
  await Answer.create({
    questionId: geographyQuestion5.id,
    answerText: "Africa",
    isCorrect: false,
  });

  const artsQuiz = await Quiz.create({ title: "Arts Quiz" });
  // arts question 1
  const artsQuestion1 = await Question.create({
    quizId: artsQuiz.id,
    questionText: "Who wrote the play 'Romeo and Juliet'?",
  });
  await Answer.create({
    questionId: artsQuestion1.id,
    answerText: "William Shakespeare",
    isCorrect: true,
  });
  await Answer.create({
    questionId: artsQuestion1.id,
    answerText: "Jane Austen",
    isCorrect: false,
  });
  await Answer.create({
    questionId: artsQuestion1.id,
    answerText: "Charles Dickens",
    isCorrect: false,
  });

  // arts question 2
  const artsQuestion2 = await Question.create({
    quizId: artsQuiz.id,
    questionText: "Who painted the Mona Lisa?",
  });
  await Answer.create({
    questionId: artsQuestion2.id,
    answerText: "Vincent van Gogh",
    isCorrect: false,
  });
  await Answer.create({
    questionId: artsQuestion2.id,
    answerText: "Leonardo da Vinci",
    isCorrect: true,
  });
  await Answer.create({
    questionId: artsQuestion2.id,
    answerText: "Michelangelo",
    isCorrect: false,
  });

  // arts question 3
  const artsQuestion3 = await Question.create({
    quizId: artsQuiz.id,
    questionText: "Which composer is famous for his Ninth Symphony?",
  });
  await Answer.create({
    questionId: artsQuestion3.id,
    answerText: "Wolfgang Amadeus Mozart",
    isCorrect: false,
  });
  await Answer.create({
    questionId: artsQuestion3.id,
    answerText: "Pyotr Ilyich Tchaikovsky",
    isCorrect: false,
  });
  await Answer.create({
    questionId: artsQuestion3.id,
    answerText: "Ludwig van Beethoven",
    isCorrect: true,
  });

  // arts question 4
  const artsQuestion4 = await Question.create({
    quizId: artsQuiz.id,
    questionText:
      "Which artist is famous for creating the 'Campbell's Soup Cans' artwork?",
  });
  await Answer.create({
    questionId: artsQuestion4.id,
    answerText: "Andy Warhol",
    isCorrect: true,
  });
  await Answer.create({
    questionId: artsQuestion4.id,
    answerText: "Jackson Pollock",
    isCorrect: false,
  });
  await Answer.create({
    questionId: artsQuestion4.id,
    answerText: "Georgia O'Keeffe",
    isCorrect: false,
  });

  // arts question 5
  const artsQuestion5 = await Question.create({
    quizId: artsQuiz.id,
    questionText: "Who sculpted the famous statue of David?",
  });
  await Answer.create({
    questionId: artsQuestion5.id,
    answerText: "Donatello",
    isCorrect: false,
  });
  await Answer.create({
    questionId: artsQuestion5.id,
    answerText: "Michelangelo",
    isCorrect: true,
  });
  await Answer.create({
    questionId: artsQuestion5.id,
    answerText: "Raphael",
    isCorrect: false,
  });

  const historyQuiz = await Quiz.create({ title: "History Quiz" });
  // history question 1
  const historyQuestion1 = await Question.create({
    quizId: historyQuiz.id,
    questionText:
      "Who was the first female Prime Minister of the United Kingdom?",
  });
  await Answer.create({
    questionId: historyQuestion1.id,
    answerText: "Margaret Thatcher",
    isCorrect: true,
  });
  await Answer.create({
    questionId: historyQuestion1.id,
    answerText: "Theresa May",
    isCorrect: false,
  });
  await Answer.create({
    questionId: historyQuestion1.id,
    answerText: "Angela Merkel",
    isCorrect: false,
  });

  // history question 2
  const historyQuestion2 = await Question.create({
    quizId: historyQuiz.id,
    questionText:
      "Which famous document established the principles of individual rights and limited government in England?",
  });
  await Answer.create({
    questionId: historyQuestion2.id,
    answerText: "Declaration of Independence",
    isCorrect: false,
  });
  await Answer.create({
    questionId: historyQuestion2.id,
    answerText: "Magna Carta",
    isCorrect: true,
  });
  await Answer.create({
    questionId: historyQuestion2.id,
    answerText: "Bill of Rights",
    isCorrect: false,
  });

  // history question 3
  const historyQuestion3 = await Question.create({
    quizId: historyQuiz.id,
    questionText:
      "In which year did the Berlin Wall fall, leading to the reunification of Germany?",
  });
  await Answer.create({
    questionId: historyQuestion3.id,
    answerText: "1975",
    isCorrect: false,
  });
  await Answer.create({
    questionId: historyQuestion3.id,
    answerText: "1991",
    isCorrect: false,
  });
  await Answer.create({
    questionId: historyQuestion3.id,
    answerText: "1989",
    isCorrect: true,
  });

  // history question 4
  const historyQuestion4 = await Question.create({
    quizId: historyQuiz.id,
    questionText:
      "What event is often considered the start of the Great Depression in the United States?",
  });
  await Answer.create({
    questionId: historyQuestion4.id,
    answerText: "Wall Street Crash of 1929",
    isCorrect: true,
  });
  await Answer.create({
    questionId: historyQuestion4.id,
    answerText: "Prohibition",
    isCorrect: false,
  });
  await Answer.create({
    questionId: historyQuestion4.id,
    answerText: "Dust Bowl",
    isCorrect: false,
  });

  // history question 5
  const historyQuestion5 = await Question.create({
    quizId: historyQuiz.id,
    questionText:
      "Which European country is known as the birthplace of democracy?",
  });
  await Answer.create({
    questionId: historyQuestion5.id,
    answerText: "Italy",
    isCorrect: false,
  });
  await Answer.create({
    questionId: historyQuestion5.id,
    answerText: "Greece",
    isCorrect: true,
  });
  await Answer.create({
    questionId: historyQuestion5.id,
    answerText: "Spain",
    isCorrect: false,
  });
};
