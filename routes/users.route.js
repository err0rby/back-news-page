const { Router } = require('express')
const router = Router();
const { userController } = require('../controllers/users.controller')

router.get('/users', userController.getAllUsers);
router.post('/users', userController.registrUser);
router.post('/login', userController.login);

module.exports = router