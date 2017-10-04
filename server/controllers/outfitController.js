const outfitModel = require('../models/outfitModel.js');

module.exports = {

//   list: (req, res) => {
//     outfitModel.find().populate('articlesList')
//       .then( outfits => res.status(200).json(outfits))
//       .catch( e => res.status(500).json({error:e.message}));
//   },
//
//   show: (req, res) => {
//     outfitModel.findById(req.params.id)
//       .then( outfit => res.status(200).json(outfit))
//       .catch( e => res.status(500).json({error:e.message}));
//   },
//
//   create: (req, res) => {
//     const {owner, articlesList, outfitName, weather, color, style} = req.body;
//     const outfit = new outfitModel({owner, articlesList, outfitName, weather, color, style});
//
//     outfit.save()
//       .then( o => res.status(200).json({message: 'New Outfit created!', outfit:o}))
//       .catch( e => res.status(500).json({error:e.message}));
//   },
//
//   update: (req, res) => {
//     const {owner, articlesList, outfitName, weather, color, style} = req.body;
//     const updates = {owner, articlesList, outfitName, weather, color, style};
//
//     outfitModel.findByIdAndUpdate(req.params.id, updates, {new:true})
//       .then(outfit => res.status(200).json(outfit))
//       .catch(e => res.status(500).json({error:e.message}));
//   }
//
// };

  list: function (req, res) {
      outfitModel.find(function (err, outfits) {
          if (err) {
              return res.status(500).json({
                  message: 'Error when getting outfit.',
                  error: err
              });
          }
          return res.json(outfits);
      });
  },

  show: function (req, res) {
      const id = req.params.id;
      outfitModel.findOne({_id: id}, function (err, outfit) {
          if (err) {
              return res.status(500).json({
                  message: 'Error when getting outfit.',
                  error: err
              });
          }
          if (!outfit) {
              return res.status(404).json({
                  message: 'No such outfit'
              });
          }
          return res.json(outfit);
      });
  },

  create: function (req, res) {
      const outfit = new outfitModel({
        owner : req.body.owner,
        articleList : req.body.articleList,
    		outfitName : req.body.outfitName,
    		wheater : req.body.wheater,
    		color : req.body.color,
    		style : req.body.style
      });

      outfit.save(function (err, outfit) {
          if (err) {
              return res.status(500).json({
                  message: 'Error when creating outfit',
                  error: err
              });
          }
          return res.status(201).json(outfit);
      });
  },


  update: function (req, res) {
      const id = req.params.id;
      outfitModel.findOne({_id: id}, function (err, outfit) {
          if (err) {
              return res.status(500).json({
                  message: 'Error when getting outfit',
                  error: err
              });
          }
          if (!outfit) {
              return res.status(404).json({
                  message: 'No such outfit'
              });
          }

          outfit.owner = req.body.owner ? req.body.owner : outfit.owner;
          outfit.articlesList = req.body.articlesList ? req.body.articlesList : outfit.articlesList;
          outfit.outfitName = req.body.outfitName ? req.body.outfitName : outfit.outfitName;
    			outfit.weather = req.body.weather ? req.body.weather : outfit.weather;
    			outfit.color = req.body.color ? req.body.color : outfit.color;
    			outfit.style = req.body.style ? req.body.style : outfit.style;


          outfit.save(function (err, outfit) {
              if (err) {
                  return res.status(500).json({
                      message: 'Error when updating outfit.',
                      error: err
                  });
              }

              return res.json(outfit);
          });
      });
  },


  remove: function (req, res) {
      const id = req.params.id;
      outfitModel.findByIdAndRemove(id, function (err, outfit) {
          if (err) {
              return res.status(500).json({
                  message: 'Error when deleting the outfit.',
                  error: err
              });
          }
          return res.status(204).json();
      });
  }
};
