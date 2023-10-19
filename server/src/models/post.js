'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.Image, {foreignKey: 'imageID', targetKey: 'id', as: 'imgs'});
      Post.belongsTo(models.Attribute, {foreignKey: 'attributeID', targetKey: 'id', as: 'attrs'});
      Post.belongsTo(models.User, {foreignKey: 'userID', targetKey: 'id', as: 'user'});
    }
  }
  Post.init({
    title: DataTypes.STRING,
    star: DataTypes.STRING,
    labelCode: DataTypes.STRING,
    address: DataTypes.STRING,
    attributeID: DataTypes.STRING,
    categoryCode: DataTypes.STRING,
    priceCode: DataTypes.STRING,
    areaCode: DataTypes.STRING,
    provinceCode: DataTypes.STRING,
    description: DataTypes.TEXT,
    userID: DataTypes.STRING,
    overviewID: DataTypes.STRING,
    imageID: DataTypes.STRING,
    priceVal: DataTypes.FLOAT(11,2),
    areaVal: DataTypes.FLOAT(11,2),
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};