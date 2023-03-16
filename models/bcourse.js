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
            Course.hasOne(models.Student, {
                foreignKey: 'studentId',
            })
            Course.hasOne(models.Grade, {
                foreignKey: 'gradeId',
            })
        }
    }
    course.init(
        {
            name: DataTypes.STRING,
            grade: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'course',
            tableName: 'courses',
        }
    )
    return Course
}
