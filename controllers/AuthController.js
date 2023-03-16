const { User } = require('../models')
const middleware = require('../middleware')

const Register = async (req, res) => {
  try {
    //Pull student model fields
    const { name, email, password } = req.body
    //Hash student provided password
    let passwordDigest = await middleware.hashPassword(password)
    //Create student using pulled fields and hashed password
    const user = await User.create({ name, email, passwordDigest })
    //Return student
    res.send(user)
  } catch (e) {
    console.error(e)
    res.status(401).send({
      status: 'ERROR',
      msg: 'ERROR CREATING USER, PLEASE TRY AGAIN!'
    })
  }
}

const Login = async (req, res) => {
  try {
    const { email, password } = req.body
    //Find student by unique email
    const user = await User.findOne({
      where: { email: email },
      raw: true
    })
    //Check if stored password and provided password match
    let matched = await middleware.comparePassword(
      user.passwordDigest,
      password
    )
    //If match id True create payload for JWT token
    if (matched) {
      //Non-Sensitive info get put into payload
      let payload = {
        id: user.id,
        name: user.name,
        email: user.email
      }
      //Token is created and sent as a response with the payload
      let token = middleware.createToken(payload)
      return res.send({
        user: payload,
        token
      })
    }
    res.status(401).send({ status: 'ERROR', msg: 'UNAUTHORIZED!' })
  } catch (e) {
    console.error(e)
    res.status(401).send({
      status: 'ERROR',
      msg: 'ERROR LOGIN IN USER, PLEASE TRY AGAIN!'
    })
  }
}

const UpdatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body
    const user = await User.findByPk(req.params.user_id)
    if (user.dataValues.email === 'admin@whiteboard.com') {
      return res.status(401).send({
        status: 'ERROR',
        msg: "CAN'T UPDATE ADMIN PASSWORD"
      })
    }
    let matched = await middleware.comparePassword(
      user.passwordDigest,
      oldPassword
    )
    if (matched) {
      let passwordDigest = await middleware.hashPassword(newPassword)
      await user.update({ passwordDigest })
      let payload = {
        id: user.id,
        email: user.email
      }
      return res.send({
        status: `WE'VE UPDATED YOUR PASSWORD!`,
        user: payload
      })
    }
    res.status(401).send({
      status: 'ERROR',
      msg: 'INVALID PASSWORD, TRY AGAIN!'
    })
  } catch (e) {
    console.error(e)
    res.status(401).send({
      status: 'ERROR',
      msg: 'ERROR UPDATING PASSWORD, PLEASE TRY AGAIN!'
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
  CheckSession
}
