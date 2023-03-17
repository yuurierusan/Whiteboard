'use strict'

const { StudentCourse } = require('../models')

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('studentcourses', [
            {
                studentId: 1,
                courseId: 2,
                grade: 85,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                studentId: 2,
                courseId: 1,
                grade: 90,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                studentId: 3,
                courseId: 3,
                grade: 75,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                studentId: 4,
                courseId: 2,
                grade: 92,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                studentId: 5,
                courseId: 1,
                grade: 80,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                studentId: 6,
                courseId: 3,
                grade: 88,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                studentId: 7,
                courseId: 1,
                grade: 78,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                studentId: 8,
                courseId: 2,
                grade: 93,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                studentId: 9,
                courseId: 3,
                grade: 70,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                studentId: 10,
                courseId: 1,
                grade: 95,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ])
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('studentcourses', null, {})
    },
}
