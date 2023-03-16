'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Grade extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Grade.hasOne(models.Student, {
                foreignKey: 'studentId',
            })
        }
    }
    Grade.init(
        {
            score: DataTypes.INTEGER,
            letter: DataTypes.STRING,
            studentId: DataTypes.INTEGER,
            field: 'student_id',
            reference: { model: 'students', key: 'id' },
        },
        {
            sequelize,
            modelName: 'Grade',
            tableName: 'grades',
        }
    )
    return Grade
}
