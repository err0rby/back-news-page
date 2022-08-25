const { Router } = require('express')
const router = Router();
const { commentsController } = require('../controllers/comments.controller');
const authMiddleware = require('../middlewares/authMiddleware')

router.get('/comments', commentsController.getComment);
router.post('/comments', authMiddleware, commentsController.addComment);
router.delete('/comments/:id', commentsController.deleteComment)

module.exports = router