"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Billing extends Model {
    static associate(models) {
      Billing.belongsTo(models.Patient, { foreignKey: "patientId" });
    }
  }
  Billing.init(
    {
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

      amount: {
        type: DataTypes.FLOAT,
      },
      billingDate: {
        type: DataTypes.DATE,
      },
      payment_status: {
        type: DataTypes.ENUM('pendente','pago', 'atrasado'),
        allowNull: false,
        defaultValue: 'pendente'
      },
    },
    {
      sequelize,
      modelName: "Billing",
    },
  );
  return Billing;
};
