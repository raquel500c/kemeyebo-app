var express = require('express');
var router = express.Router();
var outfitController = require('../controllers/outfitController.js');

/*
 * GET
 */
router.get('/', outfitController.list);

/*
 * GET
 */
router.get('/:id', outfitController.show);

/*
 * POST
 */
router.post('/', outfitController.create);

/*
 * PUT
 */
router.put('/:id', outfitController.update);

/*
 * DELETE
 */
router.delete('/:id', outfitController.remove);

module.exports = router;
