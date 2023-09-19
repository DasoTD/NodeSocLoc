require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
};
  

// // config.js
// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize(
//   'soc_db', // Your database name
//   'soc', // Your database username
//   'userPassword', // Your database password
//   {
//     host: "localhost",
//     dialect: 'postgres',
  
  
//   // Additional configuration options if needed
// });

// // host: 'localhost', // Your database host
// // dialect: 'postgres', // Specify your database dialect here (e.g., 'mysql', 'postgres', 'sqlite', etc.)


// module.exports = sequelize;
