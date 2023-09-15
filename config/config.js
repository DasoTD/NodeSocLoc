require("dotenv").config();

module.exports = {
  development: {
    DB_USER: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_DATABASE,
    DB_HOST: process.env.DB_HOST,
    DB_DIALECT: process.env.DB_DIALECT,
    use_env_variable: process.use_env_variable
  }
  
};

// config.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'soc_db', // Your database name
  'soc', // Your database username
  'userPassword', // Your database password
  {
    host: "localhost",
    dialect: 'postgres',
  
  
  // Additional configuration options if needed
});

// host: 'localhost', // Your database host
// dialect: 'postgres', // Specify your database dialect here (e.g., 'mysql', 'postgres', 'sqlite', etc.)


module.exports = sequelize;
