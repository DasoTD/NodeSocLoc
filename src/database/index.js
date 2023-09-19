const { Sequelize } = require("sequelize");

const doubbleDB = new Sequelize("soc_db", "soc", "userPassword", {
  host: 'localhost',
  dialect: "postgres",
});

module.exports = doubbleDB;


// const { Sequelize } = require("sequelize");
// const {DB_NAME,DB_USER, DB_PASSWORD, DB_DIALECT, DB_HOST} = require("./src/database/config")

// const doubbleDB = new Sequelize('soc_db', 'soc', "userPassword", {
//   host: DB_HOST,
//   dialect: 'postgres',
//   operatorsAliases: "0",

//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000,
//   },
// });