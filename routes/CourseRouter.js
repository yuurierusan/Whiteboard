const Router = require('express').Router()
const controller = require('../controllers/CourseController')

Router.get('/all', controller.GetAllCourses)

Router.get('/:id', controller.GetCourseById)

Router.post('/create', controller.CreateCourse)

Router.delete('/studentId/:course', controller.DeleteCourse)

module.exports = Router
