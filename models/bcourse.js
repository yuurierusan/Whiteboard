'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Course.hasMany(models.Student, {
        foreignKey: 'courseId'
      })
      Course.hasOne(models.Grade, {
        foreignKey: 'gradeId'
      })
    }
  }
  Course.init(
    {
      name: DataTypes.STRING,
      studentId: {
        type: DataTypes.INTEGER,
        field: 'student_id',
        reference: { model: 'students', key: 'id' }
      },
      grade: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Course',
      tableName: 'courses'
    }
  )
  return Course
}
