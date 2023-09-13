import Quiz from "../models/Quiz.js";
const create = async (ctx) => {
    console.log("Inside Quizcontroller:");
    try {
        const quiz = await Quiz.create({ title: ctx.request.body.title });
        ctx.body = { id: quiz.id };
    }
    catch (err) {
        console.error(err);
        ctx.response.status = 500;
        ctx.body = { err: "Unable to create new quiz" };
    }
};
const list = async (ctx) => {
    const all = await Quiz.findAll();
    ctx.body = all;
};
const QuizController = {
    create,
    list,
};
export default QuizController;
