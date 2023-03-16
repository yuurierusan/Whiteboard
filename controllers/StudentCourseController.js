const { StudentCourse } = require('../models/')

const GetAllStudentCourses = async (req, res) => {
  try {
    const allCourses = await StudentCourse.findAll()
    res.send
  } catch (error) {
    throw error
  }
}

const GetAllCoursesByStudentId = async (req, res) => {
  try {
    const studentId = +req.params.id
    const courses = await StudentCourse.findAll({
      where: { studentId: studentId }
    })
    res.send(courses)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllStudentCourses,
  GetAllCoursesByStudentId
}
