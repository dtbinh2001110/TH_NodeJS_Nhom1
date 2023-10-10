'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class List_users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  List_users.init({
    Username: DataTypes.STRING,
    FullName: DataTypes.STRING,
    Email: DataTypes.STRING,
    Sodienthoai: DataTypes.INTEGER,
    Address: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'List_users',
  });
  return List_users;
};