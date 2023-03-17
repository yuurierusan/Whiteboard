const Router = require('express').Router()
const controller = require('../controllers/StudentController')

Router.get(
  '/all',

  controller.GetAllStudents
)

Router.post('/create', controller.CreateStudent)

Router.get(
  '/:studentId',

  controller.GetStudentById
)

Router.post(
  '/create',

  controller.CreateStudent
)

Router.delete(
  '/delete/:studentId',

  controller.DeleteStudentById
)

module.exports = Router
