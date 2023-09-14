const { Sequelize } = require("sequelize");
const {DB_NAME,DB_USER, DB_PASSWORD, DB_DIALECT, DB_HOST} = require("./config")

const doubbleDB = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  operatorsAliases: "0",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = doubbleDB;