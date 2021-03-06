'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    userId: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  Project.associate = function(models) {
    // associations can be defined here
    Project.hasOne(models.User,{foreignKey:'userId'});
    Project.hasMany(models.Task, {foreignKey:'taskId'});
  };
  return Project;
};
