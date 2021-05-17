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
        console.log("***ERROR*** = ", err);
        return res.json(500,{
            message: "Internal Server Error"
        });
    }
    
    };
