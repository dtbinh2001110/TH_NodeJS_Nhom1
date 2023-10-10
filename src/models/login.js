'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Logins extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Logins.init({
    Username: DataTypes.STRING,
    Password: DataTypes.STRING,
    Status: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Logins',
  });
  return Logins;
};