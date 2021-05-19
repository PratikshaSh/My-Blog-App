const express = require('express');
const router = express.Router();
const commentController = require('../../controllers/commentController');

router.post("/", commentController.create);
router.get("/:id", commentController.getAllComments);




module.exports = router;