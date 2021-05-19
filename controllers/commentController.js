const Comment = require('../models/commentModel')
const Article = require('../models/articleModel')


// @desc Post a comment on existing post
// @route POST /api/comments/
// @access  Public
module.exports.create = async(req, res) => {

    try {
        const article = await Article.findById(req.body.article)
        if(article){
            const comment = new Comment({
                content: req.body.content,
                name: req.body.name,
                email: req.body.email,
                article : req.body.article
            });
            const createdComment = await comment.save();
            article.comments.push(createdComment);
            article.save();

            return res.status(201).json({
                article : createdComment,
                message: "Comment created on article"
            });

        }
        else{
            return res.status(404).json({
                message: "This article does not exist"
            });
        }
    } catch (error) {
        console.log("***ERROR IN CREATING COMMENT*** = ", error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
    
}

// @desc Fetch all comments for a posts
// @route GET /api/comments/:id
// @access  Public
module.exports.getAllComments = async (req, res) => {
    try {
        const article = await Article.findById(req.params.id).populate('comments');
        if(article){
            res.json(article.comments)
        }
        else{
            return res.status(404).json({
                message: "This article does not exist"
            });
        }
       

    } catch (error) {
        console.log("***ERROR IN FETCHING ALL THE COMMENTS OF THIS ARTICLE*** = ", error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
    
    };    




  
