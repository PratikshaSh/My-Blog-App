const express = require('express');
const router = express.Router();


router.use('/articles', require('./articles'));
router.use('/comments', require('./comments'));




module.exports = router;