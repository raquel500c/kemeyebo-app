const outfitModel = require('../models/outfitModel.js');
const articleModel = require('../models/articleModel.js');

module.exports = {

  list: (req, res) => {
    outfitModel.find().populate('articlesList')
      .then( outfits => res.status(200).json(outfits))
      .catch( e => res.status(500).json({error:e.message}));
  },

  show: (req, res) => {
    outfitModel.findById(req.params.id)
      .then( outfit => res.status(200).json(outfit))
      .catch( e => res.status(500).json({error:e.message}));
  },

  create: (req, res) => {
    const {owner, articlesList, name, season, colorsRange, style, notes} = req.body;
    const outfit = new outfitModel({owner, articlesList, name, season, colorsRange, style, notes});

    outfit.save()
      .then( o => res.status(200).json({message: 'New Outfit created!', outfit:o}))
      .catch( e => res.status(500).json({error:e.message}));
  },

  update: (req, res) => {
    const {owner, articlesList, name, season, colorsRange, style, notes} = req.body;
    const updates = {owner, articlesList, name, season, colorsRange, style, notes};

    outfitModel.findByIdAndUpdate(req.params.id, updates, {new:true})
      .then(outfit => res.status(200).json(outfit))
      .catch(e => res.status(500).json({error:e.message}));
  },

  remove: (req, res) => {
    outfitModel.findByIdAndRemove(req.params.id)
      .then(outfit => res.status(200).json(outfit))
      .catch(e => res.status(500).json({error:e.message}));
  }

};
