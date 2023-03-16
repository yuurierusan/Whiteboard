const Router = require('express').Router()
const controller = require('../controllers/GradeController')
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

Router.post(
  '/:studentId/:courseId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateGradeByCourseId
)

Router.delete(
  '/:studentId/:courseId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteGradeByCourseId
)

module.exports = Router
