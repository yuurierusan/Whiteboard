const { Course, Grade } = require('../models')

const GetAllGrades = async (res) => {
    try {
        let studentId = +req.params.student_id
        const grades = await Grade.findAll({
            where: { id: studentId },
        })
        res.send(grades)
    } catch (e) {
        throw e
    }
}

const GetGradeById = async (req, res) => {
    try {
        const grade = await Grade.findByPk(req.params.id, {
            include: [{ model: Course, include: { model: Grade } }],
        })
        res.send(grade)
    } catch (e) {
        throw e
    }
}

const CreateGradeByCourseId = async (req, res) => {
    try {
        let grade = await Grade.create(req.body)
        res.send(grade)
    } catch (e) {
        throw e
    }
}

const DeleteGradeByCourseId = async (req, res) => {
    try {
        let id = +req.params.id
        await Grade.destroy({ where: { id: id } })
        res.send({ msg: `Deleted grade with an ID of ${id}` })
    } catch (e) {
        throw e
    }
}

module.exports = {
    GetAllGrades,
    GetGradeById,
    CreateGradeByCourseId,
    DeleteGradeByCourseId,
}
