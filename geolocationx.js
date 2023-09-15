"use strict";
const { Model } = require("sequelize");
// module.exports = (sequelize, DataTypes) => {
    export default class Geolocation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Geolocation, { foreignKey: "id" });
    }
  }
  Geolocation.init(
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
            references: {
              model: "Users",
              key: "id",
              as: "id",
            },
          },
          socketID: {
            type: DataTypes.STRING,
            unique: true,
          },
          location: {
            type: DataTypes.GEOMETRY,
          },
          online: {
            type: DataTypes.BOOLEAN,
          },
          trackerID: {
            type: DataTypes.INTEGER,
            references: {
              model: "Users",
              key: "id",
              as: "id",
            },
          },
          createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
          },
          updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
          },
    },
    {
      sequelize,
      modelName: "Geolocation",
    }
  );
//   return Geolocation;
// };
