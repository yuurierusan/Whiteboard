const Router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

Router.get(
  '/all',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetAllGrades
)

Router.get(
  '/:courseId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetGradeById
)

Router.delete(
  '/:studentId/:courseId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteGradeByCourseId
)

module.exports = Router
