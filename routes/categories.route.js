const { Router } = require('express')
const router = Router();
const { categoryController } = require('../controllers/categories.controller')

router.post('/category', categoryController.addCategory);
router.get('/category', categoryController.getCat);

module.exports = router;