import { ForeignKey, Model, Optional } from "sequelize";
import Question from "./Question.js";

export type AnswerAttributes = {
  id: string;
  question_id: ForeignKey<Question["id"]>;
  answer_text: string;
};

// We're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type AnswerCreationAttributes = Optional<AnswerAttributes, "id">;

class Answer extends Model<AnswerAttributes, AnswerCreationAttributes> {
  declare id: number;
  declare name: string;
  declare question_id: ForeignKey<Question["id"]>;
  // other attributes...
}

export default Answer;
