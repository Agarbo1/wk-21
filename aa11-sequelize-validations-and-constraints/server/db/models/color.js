'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Color extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Color.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [2, 20],
        endsWithY(){
          if(this.name[this.name.length - 1] === 'y') {
            throw new Error('name cannot end with "Y"')
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Color',
  });
  return Color;
};
