const express = require('express');
const router = express.Router();
const apiRoutes = require('./api/index');
const auth = require('./auth');

router.use('/', auth);
router.use('/api', apiRoutes)

module.exports = router;
