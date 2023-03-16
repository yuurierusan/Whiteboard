const router = require('express').Router()
const controller = require('../controllers/AuthController')
const middleware = require('../middleware')

router.post('/login', controller.Login)
router.post('/register', controller.Register)

router.put(
    '/update/:student_id',
    middleware.strip,
    middleware.verifyToken,
    controller.UpdatePassword
)

router.get(
    '/session',
    middleware.stripToken,
    middleware.verifyToken,
    controller.CheckSession
)

module.exports = router
