const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController.js');
const mongoose = require('mongoose');

const checkIDParam = (req,res,next) =>{
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
  next();
};

router.get('/', articleController.list);
router.get('/:id', checkIDParam, articleController.show);
router.post('/', articleController.create);
router.put('/:id', checkIDParam, articleController.update);
router.delete('/:id', articleController.remove);

module.exports = router;
