const Sequelize = require('sequelize');
require('dotenv').config();

const db = new Sequelize(
    process.env.DB_NAME,
    process.env.USER_NAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.HOST_NAME,
        dialect: "postgres",
    }
);

module.exports = db;
