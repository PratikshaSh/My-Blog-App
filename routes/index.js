const express = require('express');
const router = express.Router();

// console.log('router is loaded');
router.use('/api', require('./api'));


module.exports = router;