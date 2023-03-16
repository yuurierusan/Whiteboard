'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Student.belongsTo(models.Course, {
        foreignKey: 'courseId'
      })
      Student.hasOne(models.Grade, {
        foreignKey: 'studentId'
      })
    }
  }
  Student.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      gradeId: {
        type: DataTypes.STRING,
        field: 'grade_id',
        reference: { model: 'grades', key: 'id' }
      },
      courseId: {
        type: DataTypes.INTEGER,
        field: 'course_id',
        reference: { model: 'courses', key: 'id' }
      },

      passwordDigest: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Student',
      tableName: 'students'
    }
  )
  return Student
}
