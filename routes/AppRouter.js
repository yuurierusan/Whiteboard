const Router = require('express').Router()
const StudentRouter = require('./StudentRouter')
const CourseRouter = require('./CourseRouter')
const UserRouter = require('./UserRouter')
const StudentCourseRouter = require('./StudentCourseRouter')

Router.use('/students', StudentRouter)
Router.use('/courses', CourseRouter)
Router.use('/user', UserRouter)
Router.use('/scr/', StudentCourseRouter)

module.exports = Router
