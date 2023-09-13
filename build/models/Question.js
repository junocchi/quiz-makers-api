import { DataTypes, Model } from "sequelize";
import DBConnection from "../db/DBConnection.js";
import Quiz from "./Quiz.js";
class Question extends Model {
}
export const init = () => {
    Question.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        question_text: {
            type: DataTypes.STRING,
        },
        question_type: { type: DataTypes.STRING },
        // correct_answer_id: { type: DataTypes.STRING },
    }, { sequelize: DBConnection.connection() });
    Question.belongsTo(Quiz, { constraints: true, foreignKeyConstraint: true });
    Quiz.hasMany(Question, { onDelete: "CASCADE" });
};
export default Question;
