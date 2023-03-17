'use strict'

const { Course } = require('../models')

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('courses', [
            {
                name: 'Mathematics',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'English',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Science',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'History',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Art',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Physics',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Chemistry',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Biology',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Geography',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Computer Science',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ])
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('courses', null, {})
    },
}
