'use strict'

const { User } = require('../models')

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('users', [
            {
                email: 'admin@whiteboard.com',
                passwordDigest: 'admin',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ])
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('users', null, {})
    },
}
