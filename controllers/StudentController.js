const { Course, Student, StudentCourse } = require('../models')

const GetAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll({
      include: {
        model: Course,
        as: 'courses',
        through: { attributes: ['grade'] }
      }
    })
    res.send(students)
  } catch (e) {
    throw e
  }
}

const GetStudentById = async (req, res) => {
  try {
    const studentId = +req.params.id
    const student = await Student.findByPk(studentId, {
      include: [
        {
          model: Course,
          as: 'courses',
          through: { attributes: ['grade'] }
        }
      ]
    })
    res.send(student)
  } catch (e) {
    throw e
  }
}

const CreateStudent = async (req, res) => {
  try {
    const { name, email } = req.body
    let student = await Student.create(req.body)
    res.send(student)
  } catch (e) {
    throw e
  }
}

const DeleteStudentById = async (req, res) => {
  try {
    let id = +req.params.id
    await Student.destroy({ where: { id: id } })
    res.send({ msg: `Deleted student with an ID of ${id}` })
  } catch (e) {
    throw e
  }
}

module.exports = {
  GetAllStudents,
  GetStudentById,
  CreateStudent,
  DeleteStudentById
}
