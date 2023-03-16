const { Course, Student, Grade } = require('../models')

const GetAllStudents = async (res) => {
    try {
        const students = await Student.findAll({
            include: { model: Course },
        })
        res.send(students)
    } catch (e) {
        throw e
    }
}

const GetStudentById = async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id, {
            include: [{ model: Course, include: { model: Grade } }],
        })
        res.send(student)
    } catch (e) {
        throw e
    }
}

const CreateStudent = async (req, res) => {
    try {
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
    DeleteStudentById,
}
