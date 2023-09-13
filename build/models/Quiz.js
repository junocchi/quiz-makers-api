import { DataTypes, Model } from "sequelize";
import DBConnection from "../db/DBConnection.js";
class Quiz extends Model {
}
export const init = () => {
    Quiz.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: { type: DataTypes.STRING },
    }, { sequelize: DBConnection.connection() });
};
export default Quiz;
