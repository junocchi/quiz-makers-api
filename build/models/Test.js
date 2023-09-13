import { DataTypes, Model } from "sequelize";
import DBConnection from "../db/DBConnection.js";
class Test extends Model {
}
export const init = () => {
    Test.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        },
    }, { sequelize: DBConnection.connection() });
};
export default Test;
