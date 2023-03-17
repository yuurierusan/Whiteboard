const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.post('/newuser', controller.CreateUser)

Router.get(
  '/all',

  controller.GetAllUsers
)

Router.get(
  '/:userId',

  controller.GetUserById
)

Router.delete(
  '/:studentId/:userId',

  controller.DeleteUser
)

module.exports = Router
