'use strict'

const { Student } = require('../models')

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('students', [
            {
                name: 'John Smith',
                email: 'john.smith@example.com',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Jane Doe',
                email: 'jane.doe@example.com',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Bob Johnson',
                email: 'bob.johnson@example.com',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Samantha Lee',
                email: 'samantha.lee@example.com',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Michael Chen',
                email: 'michael.chen@example.com',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Emily Davis',
                email: 'emily.davis@example.com',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'David Wilson',
                email: 'david.wilson@example.com',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Stephanie Rodriguez',
                email: 'stephanie.rodriguez@example.com',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Daniel Kim',
                email: 'daniel.kim@example.com',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Avery Jones',
                email: 'avery.jones@example.com',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ])
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('students', null, {})
    },
}
