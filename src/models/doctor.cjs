"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    static associate(models) {
      Doctor.hasMany(models.Appointment, { foreignKey: "doctorId" });
    }
  }
  Doctor.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      firstName: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      schedule: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Doctor",
      tableName: "Doctor",
    },
  );
  return Doctor;
};
