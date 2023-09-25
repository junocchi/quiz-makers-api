import { DataTypes, Model, Optional, ForeignKey } from "sequelize";
import DBConnection from "../db/DBConnection.js";
import Quiz from "./Quiz.js";

type AttemptAttributes = {
  id: number;
  userName: string;
  quizId: ForeignKey<Quiz["id"]>;
  score: number;
};

export type AttemptCreationAttributes = Optional<AttemptAttributes, "id">;

class Attempt extends Model<AttemptAttributes, AttemptCreationAttributes> {
  declare id: number;
  declare userName: string; //this could changed to userId
  declare quizId: ForeignKey<Quiz["id"]>;
  declare score: number;
}

export const init = () => {
  Attempt.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userName: { type: DataTypes.STRING },
      score: { type: DataTypes.INTEGER },
    },
    {
      sequelize: DBConnection.connection(),
    }
  );
};

export default Attempt;
