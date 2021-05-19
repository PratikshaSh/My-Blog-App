const mongoose = require('mongoose');


const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    image1: {
        type: String
    },
    image2:{
        type:String
    },
     // include the array of ids of all comments in this post schema itself
     comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]

},{
    timestamps: true
});

const Article = mongoose.model('article', articleSchema);

module.exports = Article;