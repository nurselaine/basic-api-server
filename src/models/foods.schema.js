'use strict';

module.exports = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('foods', {
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    caloriess: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    cuisine: {
      type: DataTypes.ENUM,
      values: ['American', 'Vietnamese', 'Ethiopian', 'German'],
      allowNull: true,
    },
  });
};
