var express = require('express');
var router = express.Router();
var articleController = require('../controllers/articleController.js');

/*
 * GET
 */
router.get('/', articleController.list);

/*
 * GET
 */
router.get('/:id', articleController.show);

/*
 * POST
 */
router.post('/', articleController.create);

/*
 * PUT
 */
router.put('/:id', articleController.update);

/*
 * DELETE
 */
router.delete('/:id', articleController.remove);

module.exports = router;
