'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: { type: Sequelize.STRING, allowNull: false },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      course: {
        type: Sequelize.STRING
      },
      gradeId: {
        type: Sequelize.STRING,
        field: 'grade_id',
        reference: { model: 'grades', key: 'id' }
      },
      courseId: {
        type: Sequelize.INTEGER,
        field: 'course_id',
        reference: { model: 'courses', key: 'id' }
      },
      passwordDigest: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('students')
  }
}
