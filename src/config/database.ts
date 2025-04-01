import { Sequelize } from "sequelize-typescript";
import { User } from "../models/user";

export const sequelize = new Sequelize ({
    database: "development",
    username: "postgres",
    password: "password",
    host: "localhost",
    dialect: "postgres",
    port: 5432,
    models:  [User]
});