const { StudentCourse } = require('../models/')

const GetAllStudentCourses = async (req, res) => {
  try {
    const allCourses = await StudentCourse.findAll()
    res.send(allCourses)
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

const AssignStudents = async (req, res) => {
  try {
    const { studentId, courseId, grade } = req.body
    const studentCourse = await StudentCourse.create({
      studentId: parseInt(studentId),
      courseId: parseInt(courseId),
      grade: parseInt(grade)
    })
    res.send(studentCourse)
  } catch (err) {
    throw err
  }
}

module.exports = {
  GetAllStudentCourses,
  GetAllCoursesByStudentId,
  AssignStudents
}
