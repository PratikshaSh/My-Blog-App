const Article = require("../models/articleModel");
const Comment = require("../models/commentModel");

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
        console.log("***ERROR IN CREATING ARTICLE*** = ", error);
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
        console.log("***ERROR IN FETCHING ALL THE ARTICLES*** = ", error);
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
        console.log("***ERROR IN FETCHING THE ARTICLE*** = ", error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
      
    };


// @desc delete a blog post
// @route GET /api/articles/:id
// @access  Private/admin
module.exports.deleteArticle = async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
      if (article) {
        await article.remove();
        await Comment.deleteMany({article: req.params.id});
    
        res.json({
          message: "Article and associated comments deleted",
        });
      } else {
        res.status(404).json({
          message: "Article Not found",
        });
      }
    } catch (error) {
        console.log("***ERROR IN DELETING THE ARTICLE*** = ", error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
      
    };

    

// @desc UPDATE a blog post
// @route PUT /api/articles/:id
// @access  Private/admin
module.exports.updateArticle = async (req, res) => {

    try {
        
        const {
            title,
            content,
          } = req.body;
        
          const article = await Article.findById(req.params.id);
        
          if(article){
            article.title = title
            article.content = content
            
            const updatedArticle = await article.save();
            // res.json(updatedProduct);
            return res.status(201).json({
                article : updatedArticle,
                message: "Article Updated"
            });
          }else{
            res.status(404);
            throw new Error('Article Not Found');
          }

    } catch (error) {
        
        console.log("***ERROR IN UPDATING THE ARTICLE*** = ", error);
        return res.status(500).json({
            message: "Internal Server Error"
        });

    }
      
    };    