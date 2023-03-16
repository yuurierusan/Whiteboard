const Router = require('express').Router
const controller = require('../controllers/StudentController')
const middleware = require('../middleware')

Router.get(
    '/all',
    middleware.stripToken,
    middleware.verifyToken,
    controller.GetAllStudents
)

Router.get(
    '/:studentId',
    middleware.stripToken,
    middleware.verifyToken,
    controller.GetStudentById
)

Router.post(
    '/create',
    middleware.stripToken,
    middleware.verifyToken,
    controller.CreateStudent
)

Router.delete(
    '/delete/:studentId',
    middleware.stripToken,
    middleware.verifyToken,
    controller.DeleteStudentById
)

module.exports = Router
