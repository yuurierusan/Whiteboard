const Router = require('express').Router
const controller = require('../controllers/CourseController')
const middleware = require('../middleware')

Router.get(
    '/all',
    middleware.stripToken,
    middleware.verifyToken,
    controller.GetAllCourses
)

Router.get(
    '/:courseId',
    middleware.stripToken,
    middleware.verifyToken,
    controller.GetCourseById
)

Router.post(
    '/studentId/:course',
    middleware.stripToken,
    middleware.verifyToken,
    controller.CreateCourseByStudentId
)

Router.delete(
    '/studentId/:course',
    middleware.stripToken,
    middleware.verifyToken,
    controller.DeleteCourseByStudentId
)

module.exports = Router
