const outfitModel = require('../models/outfitModel.js');

/**
 * outfitController.js
 *
 * @description :: Server-side logic for managing outfits.
 */
module.exports = {

    /**
     * outfitController.list()
     */
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

    /**
     * outfitController.show()
     */
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

    /**
     * outfitController.create()
     */
    create: function (req, res) {
        const outfit = new outfitModel({
			name : req.body.name,
			wheater : req.body.wheater,
			color : req.body.color,
			style : req.body.style,
			//num-articles : req.body.numArticles,
			owner : req.body.owner

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

    /**
     * outfitController.update()
     */
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

            outfit.name = req.body.name ? req.body.name : outfit.name;
      			outfit.wheater = req.body.wheater ? req.body.wheater : outfit.wheater;
      			outfit.color = req.body.color ? req.body.color : outfit.color;
      			outfit.style = req.body.style ? req.body.style : outfit.style;
      			outfit.num-articles = req.body.num-articles ? req.body.num-articles : outfit.num-articles;
      			outfit.date = req.body.date ? req.body.date : outfit.date;
      			outfit.owner = req.body.owner ? req.body.owner : outfit.owner;

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

    /**
     * outfitController.remove()
     */
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
