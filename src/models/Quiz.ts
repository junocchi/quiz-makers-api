import { DataTypes, Model, Optional } from "sequelize";
import DBConnection from "../db/DBConnection";
import Question from "./Question";

// https://sequelize.org/docs/v6/other-topics/typescript/#usage
type QuizAttributes = {
  id: number;
  title: string;
  // description: string;
  // createdAt: Date;
  // updatedAt: Date;
  // owner: UserId;
  // isOpen: boolean;
  // questions: Question[];
};

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
export type QuizCreationAttributes = Optional<QuizAttributes, "id">;

class Quiz extends Model<QuizAttributes, QuizCreationAttributes> {
  declare id: number;
  declare title: string;
  // other attributes...
}

export const init = () => {
  Quiz.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: { type: DataTypes.STRING },
    },
    { sequelize: DBConnection.connection() }
  );
};

export default Quiz;
