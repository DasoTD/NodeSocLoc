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
