'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inventory extends Model {
 
    static associate(models) {
      // define association here
    }
  }
  Inventory.init({
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      itemName: {
        type: DataTypes.STRING
      },
      quantity: {
        type: DataTypes.INTEGER
      },
      expiration_date: {
        type: DataTypes.DATE
      },
  }, {
    sequelize,
    modelName: 'Inventory',
  });
  return Inventory;
};