const { Course, Student, StudentCourses } = require('../models')

const GetAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll({
      include: {
        model: Student,
        as: 'students',
        through: { attributes: ['grade'] }
      }
    })
    res.send(courses)
  } catch (e) {
    throw e
  }
}

const GetCourseById = async (req, res) => {
  try {
    const courseId = parseInt(req.params.id)
    const course = await Course.findByPk(courseId, {
      include: {
        model: Student,
        as: 'students',
        through: { attributes: ['grade'] }
      }
    })
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
    let courseId = +req.params.id
    await Course.destroy({ where: { id: courseId } })
    res.send({ msg: `Deleted course with an ID of ${courseId}` })
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
