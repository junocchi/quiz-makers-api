import { DataTypes, ForeignKey, Model, Optional } from "sequelize";
import Question from "./Question.js";
import DBConnection from "../db/DBConnection.js";

export type AnswerAttributes = {
  id: string;
  questionId: ForeignKey<Question["id"]>;
  answerText: string;
  isCorrect: boolean;
};

// We're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
export type AnswerCreationAttributes = Optional<AnswerAttributes, "id">;

class Answer extends Model<AnswerAttributes, AnswerCreationAttributes> {
  declare id: number;
  declare name: string;
  declare questionId: ForeignKey<Question["id"]>;
  declare isCorrect: boolean;
  // other attributes...
}

export const init = () => {
  Answer.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      answerText: {
        type: DataTypes.STRING,
      },
      isCorrect: {
        type: DataTypes.BOOLEAN,
      },
    },
    { sequelize: DBConnection.connection() }
  );
};

export default Answer;
