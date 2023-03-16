const Router = require('express').Router()

const controller = require('../controllers/StudentCourseController')
const middleware = require('../middleware')

Router.get(
  '/all',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetAllStudentCourses
)

Router.get(
  '/:studentId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetAllCoursesByStudentId
)

module.exports = Router
