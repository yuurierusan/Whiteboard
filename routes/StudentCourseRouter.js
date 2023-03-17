const Router = require('express').Router()

const controller = require('../controllers/StudentCourseController')

Router.get('/all', controller.GetAllStudentCourses)

Router.get('/:studentId', controller.GetAllCoursesByStudentId)

module.exports = Router
