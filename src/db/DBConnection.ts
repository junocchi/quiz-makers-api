import { Sequelize } from "sequelize";

class DBConnection {
  static #sequelize: Sequelize;

  static connection() {
    if (!DBConnection.#sequelize) {
      throw new Error(
        "Must call connect before attempting to get the connection"
      );
    }

    return DBConnection.#sequelize;
  }

  static async connect() {
    if (DBConnection.#sequelize) {
      return;
    }

    const connectionString = process.env.DB_URL;

    if (!connectionString) {
      throw new Error(
        "No DB_URL environment variable present. Unable to connect to the database."
      );
    }

    const sequelize = new Sequelize(connectionString);

    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }

    DBConnection.#sequelize = sequelize;
  }
}

export default DBConnection;
