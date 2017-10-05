const articleModel = require('../models/articleModel.js');

module.exports = {

  list: (req, res) => {
    articleModel.find().populate('owner')
      .then(articles => res.status(200).json(articles))
      .catch(e => res.status(500).json({error:e.message}));
  },

  show: (req, res) => {
    articleModel.findById(req.params.id)
      .then( article => res.status(200).json(article))
      .catch(e => res.status(500).json({error:e.message}));
  },

  create: (req, res) => {
    const {owner, image, name, season, colorsRange, style, category, notes } = req.body;
    const article = new articleModel({
      owner, name, season, colorsRange, style, category, notes,
      image: req.body.image || ''
    });

    article.save()
      .then( a => res.status(200).json({message: 'New Article created!', article: a}))
      .catch( e => res.status(500).json({error:e.message}));
  },

  update: (req, res) => {
    const {owner, image, name, season, colorsRange, style, category, notes } = req.body;
    const updates = {owner, image, name, season, colorsRange, style, category, notes } ;

    articleModel.findByIdAndUpdate(req.params.id, updates, {new:true})
      .then(p => res.status(200).json(p))
      .catch(e => res.status(500).json({error:e.message}));
  },

  remove: (req, res) => {
    articleModel.findByIdAndRemove(req.params.id)
      .then(p => res.status(200).json(p))
      .catch(e => res.status(500).json({error:e.message}));
  }
};
