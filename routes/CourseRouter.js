const Router = require('express').Router()
const controller = require('../controllers/CourseController')
const middleware = require('../middleware')

Router.get(
  '/all',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetAllCourses
)

Router.get(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetCourseById
)

Router.post(
  '/create',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateCourse
)

Router.delete(
  '/studentId/:course',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteCourse
)

module.exports = Router
