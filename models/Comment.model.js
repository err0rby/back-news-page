const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    text: String,
    blogs: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Blog'
    },
    watch: {
        type: Date,
        default: Date.now,
    }
})

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;