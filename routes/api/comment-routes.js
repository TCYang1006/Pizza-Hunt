const router = require('express').Router();
const {addComment, removeComment}=require('../../controllers/comment-controller');

// /api/comments/<pizzId>
router.route('/:pizzaId').post(addComment);

// /api/comments/<pizzId>/<commentId>
router.route('/:pizzaId/:commentId').delete(removeComment);

module.exports = router