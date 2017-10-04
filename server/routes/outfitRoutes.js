const express = require('express');
const router = express.Router();
const outfitController = require('../controllers/outfitController.js');
const mongoose = require('mongoose');

const checkIDParam = (req,res,next) =>{
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
  next();
};

router.get('/', outfitController.list);
router.get('/:id', checkIDParam, outfitController.show);
router.post('/', outfitController.create);
router.put('/:id', checkIDParam, outfitController.update);
router.delete('/:id', checkIDParam, outfitController.remove);

module.exports = router;
