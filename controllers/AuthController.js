const { Student } = require('../models')
const middleware = require('../middleware')

const Register = async (req, res) => {
    try {
        //Pull student model fields
        const { name, email, password } = req.body
        //Hash student provided password
        let passwordDigest = await middleware.hashPassword(password)
        //Create student using pulled fields and hashed password
        const student = await Student.create({ name, email, passwordDigest })
        //Return student
        res.send(student)
    } catch (e) {
        console.error(e)
        res.status(401).send({
            status: 'ERROR',
            msg: 'ERROR CREATING STUDENT, PLEASE TRY AGAIN!',
        })
    }
}

const Login = async (req, res) => {
    try {
        //Find student by unique email
        const student = await Student.findOne({
            where: { email: req.body.email },
            raw: true,
        })
        //Check if stored password and provided password match
        let matched = await middleware.comparePassword(
            Student.passwordDigest,
            req.body.password
        )
        //If match id True create payload for JWT token
        if (matched) {
            //Non-Sensitive info get put into payload
            let payload = {
                id: Student.id,
                name: Student.name,
                email: Student.email,
            }
            //Token is created and sent as a response with the payload
            let token = middleware.createToken(payload)
            return res.send({
                student: payload,
                token,
            })
        }
        res.status(401).send({ status: 'ERROR', msg: 'UNAUTHORIZED!' })
    } catch (e) {
        console.error(e)
        res.status(401).send({
            status: 'ERROR',
            msg: 'ERROR CREATING STUDENT, PLEASE TRY AGAIN!',
        })
    }
}

const UpdatePassword = async (req, res) => {
    try {
        const { oldPassword, newPassword } = req.body
        const student = await Student.findByPk(req.params.student_id)
        if (student.dataValues.email === 'admin@whiteboard.com') {
            return res.status(401).send({
                status: 'ERROR',
                msg: "CAN'T UPDATE ADMIN PASSWORD",
            })
        }
        let matched = await middleware.comparePassword(
            student.passwordDigest,
            oldPassword
        )
        if (matched) {
            let passwordDigest = await middleware.hashPassword(newPassword)
            await student.update({ passwordDigest })
            let payload = {
                id: student.id,
                email: student.email,
            }
            return res.send({
                status: `WE'VE UPDATED YOUR PASSWORD!`,
                student: payload,
            })
        }
        res.status(401).send({
            status: 'ERROR',
            msg: 'INVALID PASSWORD, TRY AGAIN!',
        })
    } catch (e) {
        console.error(e)
        res.status(401).send({
            status: 'ERROR',
            msg: 'ERROR UPDATING PASSWORD, PLEASE TRY AGAIN!',
        })
    }
}

const CheckSession = async (req, res) => {
    const { payload } = res.locals
    res.send(payload)
}

module.exports = {
    Register,
    Login,
    UpdatePassword,
    CheckSession,
}
