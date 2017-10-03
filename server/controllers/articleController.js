var articleModel = require('../models/articleModel.js');

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
        articleModel.find(function (err, articles) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting article.',
                    error: err
                });
            }
            return res.json(articles);
        });
    },

    /**
     * articleController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
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
        var article = new articleModel({
			user_id : req.body.user_id

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
        var id = req.params.id;
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
        var id = req.params.id;
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
