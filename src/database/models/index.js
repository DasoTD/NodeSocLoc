"use strict";
const dotenv = require("dotenv");
dotenv.config();
const fs = require("fs");
const path = require('node:path');
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
// const config = require(__dirname + "/config")[env];
const config = require(`${__dirname}/../config/index.js`)[env]
const {use_env_variable, DB_DIALECT, DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } = require("../config")

const db = {};

// console.log({ });

let sequelize;
if (use_env_variable) {
  sequelize = new Sequelize(process.env[use_env_variable], config);
} else {
  sequelize = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASSWORD,{
    host: 'localhost',
    dialect: 'postgres', /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
    config
  }
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;



module.exports = db;
