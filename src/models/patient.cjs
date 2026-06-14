'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    static associate(models) {
      Patient.hasMany( models.Appointment, { foreignKey: 'patientId' });
      Patient.hasMany( models.Billing, { foreignKey: 'patientId' });
    }
  }
  Patient.init({
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
      dob: {
        type: DataTypes.DATE,
      },
      gender: {
        type: DataTypes.STRING,
      },
      adress: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
      insurance_info: {
        type: DataTypes.STRING,
      },
  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};