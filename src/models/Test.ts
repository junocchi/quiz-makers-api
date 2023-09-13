import { DataTypes, ForeignKey, Model, Optional } from "sequelize";
import DBConnection from "../db/DBConnection.js";

type TestAttributes = {
  id: number;
  name: string;
};

type TestCreationAttributes = Optional<TestAttributes, "id">;

class Test extends Model<TestAttributes, TestCreationAttributes> {
  declare id: number;
  declare name: string;
}

export const init = () => {
  Test.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
    },
    { sequelize: DBConnection.connection() }
  );
};

export default Test;
