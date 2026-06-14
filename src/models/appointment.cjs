'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    static associate(models) {
      Appointment.belongsTo(models.Patient, { foreignKey: 'patientId' });
      Appointment.belongsTo(models.Doctor, { foreignKey: 'doctorId' });
    }
  }
  Appointment.init({
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      patientId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Patients",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      doctorId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Doctor",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      appointmentDate: {
        type: DataTypes.DATE,
      },
      status: {
        type: DataTypes.STRING,
      },
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};