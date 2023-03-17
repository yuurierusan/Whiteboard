const Router = require('express').Router()

const controller = require('../controllers/StudentCourseController')

Router.get('/all', controller.GetAllStudentCourses)

Router.get('/:id', controller.GetAllCoursesByStudentId)

Router.post('/create', controller.AssignStudents)

module.exports = Router
