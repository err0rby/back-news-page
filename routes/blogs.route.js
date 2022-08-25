const { Router } = require('express');
const router = Router();
const { blogController } = require('../controllers/blogs.controller');

router.post('/blogs', blogController.addBlog);
router.get('/blogs', blogController.getBlog);

module.exports = router;