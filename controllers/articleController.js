const Article = require("../models/articleModel");

// @desc Create a  blog post
// @route POST /api/articles/
// @access  Private/admin
module.exports.createArticle = async (req, res) => {
    try {
        const article = new Article({
            title: req.body.title,
            content: req.body.content
        });
        const createdArticle = await article.save();
        return res.status(201).json({
            article : createdArticle,
            message: "Blog post created"
        });

    } catch (error) {
        console.log("***ERROR IN CREATING ARTICLE*** = ", err);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
    
    };


// @desc Fetch all blogs posts
// @route GET /api/articles
// @access  Public
module.exports.getAllArticles = async (req, res) => {
    try {
        const articles = await Article.find({});
        return res.json(articles);

    } catch (error) {
        console.log("***ERROR IN FETCHING ALL THE ARTICLES*** = ", err);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
    
    };    

// @desc Fetch a single blog by id
// @route GET /api/articles/:id
// @access  Public
module.exports.getArticleById = async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
      if (article) {

        res.json(article);

      } else {

        res.status(404).json({
          message: "Article Not found",
        });

      }
    } catch (error) {
        console.log("***ERROR IN FETCHING ALL THE ARTICLES*** = ", err);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
      
    };
    