const bagModel = require('../models/bagModel.js');

module.exports = {

  list: (req, res) => {
    bagModel.find().populate('articlesList outfitsList')
      .then( outfits => res.status(200).json(outfits))
      .catch( e => res.status(500).json({error:e.message}));
  },

  show: (req, res) => {
    bagModel.findById(req.params.id)
      .then( bag => res.status(200).json(bag))
      .catch( e => res.status(500).json({error:e.message}));
  },

  create: (req, res) => {
    const {owner, articlesList, outfitsList, travelName, travelDate, travelDays, notes } = req.body;
    const bag = new bagModel({owner, articlesList, outfitsList, travelName, travelDate, travelDays, notes});

    bag.save()
      .then( b => res.status(200).json({message: 'New Bag created!', bag:b}))
      .catch( e => res.status(500).json({error:e.message}));
  },

  update: (req, res) => {
    const {owner, articlesList, outfitsList, travelName, travelDate, travelDays, notes} = req.body;
    const updates = {owner, articlesList, outfitsList, travelName, travelDate, travelDays, notes};

    bagModel.findByIdAndUpdate(req.params.id, updates, {new:true})
      .then(bag => res.status(200).json(bag))
      .catch(e => res.status(500).json({error:e.message}));
  },

  remove: (req, res) => {
    bagModel.findByIdAndRemove(req.params.id)
      .then(bag => res.status(200).json(bag))
      .catch(e => res.status(500).json({error:e.message}));
  }

};
