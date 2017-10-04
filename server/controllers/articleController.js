const articleModel = require('../models/articleModel.js');

/**
 * articleController.js
 *
 * @description :: Server-side logic for managing articles.
 */
module.exports = {

    /**
     * articleController.list()
     */
    list: function (req, res) {
      articleModel.find().populate('owner')
      .then(articles => {
         return res.json(articles);
      })
      .catch(e => res.status(500).json({error:e.message}));
        // articleModel.find(function (err, articles) {
        //     if (err) {
        //         return res.status(500).json({
        //             message: 'Error when getting article.',
        //             error: err
        //         });
        //     }
        //     return res.json(articles);
        // });
    },

    /**
     * articleController.show()
     */
    show: function (req, res) {
        const id = req.params.id;
        articleModel.findOne({_id: id}, function (err, article) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting article.',
                    error: err
                });
            }
            if (!article) {
                return res.status(404).json({
                    message: 'No such article'
                });
            }
            return res.json(article);
        });
    },

    /**
     * articleController.create()
     */
    create: function (req, res) {
        const article = new articleModel({
    			owner : req.body.owner,
          articleName: req.body.articleName,
          weater: req.body.weater,
          color: req.body.color,
          style: req.body.style,
          category: req.body.category,
          image: req.body.image

        });

        article.save(function (err, article) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating article',
                    error: err
                });
            }
            return res.status(201).json(article);
        });
    },

    /**
     * articleController.update()
     */
    update: function (req, res) {
        const id = req.params.id;
        articleModel.findOne({_id: id}, function (err, article) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting article',
                    error: err
                });
            }
            if (!article) {
                return res.status(404).json({
                    message: 'No such article'
                });
            }

            article.user_id = req.body.user_id ? req.body.user_id : article.user_id;

            article.save(function (err, article) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating article.',
                        error: err
                    });
                }

                return res.json(article);
            });
        });
    },

    /**
     * articleController.remove()
     */
    remove: function (req, res) {
        const id = req.params.id;
        articleModel.findByIdAndRemove(id, function (err, article) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the article.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
