"use strict";
const { Model, DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../index");
const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  // role: {
  //   type: DataTypes.STRING,
  //   allowNull: true,
  // },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = User;
// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//       this.hasOne(models.Geolocation, { foreignKey: "id" });
//     }
//   }
//   User.init(
//     {
//       firstName: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       lastName: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       email: {
//         type: DataTypes.STRING,
//         unique: true,
//       },
//       role: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       password: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//     },
//     {
//       sequelize,
//       modelName: "User",
//     }
//   );
//   return User;
// };
