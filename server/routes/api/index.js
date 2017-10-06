const express = require('express');
const router = express.Router();
const articles = require('./articleRoutes');
const outfits = require('./outfitRoutes');
const bags = require('./bagRoutes');

router.use('/articles', articles);
router.use('/outfits', outfits);
router.use('/bags', bags);

module.exports = router;
