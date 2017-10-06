const express = require('express');
const router = express.Router();
const bagController = require('../../controllers/bagController.js');
const mongoose = require('mongoose');

const checkIDParam = (req,res,next) =>{
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
  next();
};

router.get('/', bagController.list);
router.get('/:id', checkIDParam, bagController.show);
router.post('/', bagController.create);
router.put('/:id', checkIDParam, bagController.update);
router.delete('/:id', checkIDParam, bagController.remove);

module.exports = router;
