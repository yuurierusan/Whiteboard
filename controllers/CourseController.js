const { Course, Student, User } = require('../models')

const GetAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll({
      include: [{ model: Student }]
    })
    res.send(courses)
  } catch (e) {
    throw e
  }
}

const GetCourseById = async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id, {})
    res.send(course)
  } catch (e) {
    throw e
  }
}

const CreateCourse = async (req, res) => {
  try {
    let course = await Course.create(req.body)

    res.send(course)
  } catch (e) {
    throw e
  }
}

const DeleteCourse = async (req, res) => {
  try {
    let id = +req.params.id
    await Course.destroy({ where: { id: id } })
    res.send({ msg: `Deleted course with an ID of ${id}` })
  } catch (e) {
    throw e
  }
}

module.exports = {
  GetAllCourses,
  GetCourseById,
  CreateCourse,
  DeleteCourse
}
