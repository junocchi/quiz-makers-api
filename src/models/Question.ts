import { DataTypes, ForeignKey, Model, Optional } from "sequelize";

import DBConnection from "../db/DBConnection.js";
import Quiz from "./Quiz.js";
// import Answer from "./Answer.js";

type QuestionType = "multiple_choice";

type QuestionAttributes = {
  id: number;
  question_text: string;
  quiz_id: ForeignKey<Quiz["id"]>;
  question_type: QuestionType;
  // correct_answer_id: ForeignKey<Answer["id"]>;
  // other attributes...
};

// We're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
export type QuestionCreationAttributes = Optional<QuestionAttributes, "id">;

class Question extends Model<QuestionAttributes, QuestionCreationAttributes> {
  declare id: number;
  declare question_text: string;
  declare quiz_id: ForeignKey<Quiz["id"]>;
  declare question_type: QuestionType;
  // declare correct_answer_id: ForeignKey<Answer["id"]>;
  // other attributes...
}

export const init = () => {
  Question.init(
    {
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
    },
    { sequelize: DBConnection.connection() }
  );
  Question.belongsTo(Quiz, { constraints: true, foreignKeyConstraint: true });
  Quiz.hasMany(Question, { onDelete: "CASCADE" });
};

export default Question;
