'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    id: DataTypes.INTEGER,
    usedId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  Task.associate = function(models) {
    // associations can be defined here

    Task.hasOne(models.User,{foreignKey:'userId'});
    Task.hasOne(models.Project,{foreignKey:'projectId'});
  };
  return Task;
};
