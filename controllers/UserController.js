const { User } = require('../models')

const CreateUser = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.create({
      email,
      password
    })
    res.send(user)
  } catch (error) {}
}

const GetAllUsers = async (req, res) => {
  try {
    const user = await User.findAll()
    res.send(user)
  } catch (e) {
    throw e
  }
}

const GetUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {})
    res.send(user)
  } catch (e) {
    throw e
  }
}

const DeleteUser = async (req, res) => {
  try {
    let id = +req.params.id
    await User.destroy({ where: { id: id } })
    res.send({ msg: `Deleted user with an ID of ${id}` })
  } catch (e) {
    throw e
  }
}

module.exports = {
  CreateUser,
  GetAllUsers,
  GetUserById,
  DeleteUser
}
