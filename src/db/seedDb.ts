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

  // geography question 1
  const geographyQuestion1 = await Question.create({
    quizId: quiz.id,
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
    quizId: quiz.id,
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
    quizId: quiz.id,
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
    quizId: quiz.id,
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
    quizId: quiz.id,
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

  // arts question 1
  const artsQuestion1 = await Question.create({
    quizId: quiz.id,
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
    quizId: quiz.id,
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
    quizId: quiz.id,
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
    quizId: quiz.id,
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
    quizId: quiz.id,
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

  // arts question 1
  const artsQuestion1 = await Question.create({
    quizId: quiz.id,
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
    quizId: quiz.id,
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
    quizId: quiz.id,
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
    quizId: quiz.id,
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
    quizId: quiz.id,
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
};
