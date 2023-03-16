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
            Student.belongsToMany(models.Course, {
                foreignKey: 'courseId',
            })
            Student.hasOne(models.Grade, {
                foreignKey: 'studentId',
            })
        }
    }
    student.init(
        {
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            course: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'student',
            tableName: 'students',
        }
    )
    return Student
}
