const { Sequelize } = require("sequelize");
const {DB_NAME,DB_USER, DB_PASSWORD, DB_DIALECT, DB_HOST} = require("./config")

const doubbleDB = new Sequelize("soc_db", "soc", "userPassword", {
  host: DB_HOST,
  dialect: "postgres",
});

module.exports = doubbleDB;