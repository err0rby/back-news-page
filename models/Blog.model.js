const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    image: String,
    title: String,
    text: String,
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category',
    },
})

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;