const Blog = require('../models/Blog.model');

module.exports.blogController = {
    addBlog: async (req, res) => {
        const { image, text, title, category } = req.body;
        try {
            const data = await Blog.create({
                image,
                text,
                title,
                category
            })
            res.json(data);
        } catch (error) {
            res.json({ error: error })
        }
    },
    getBlog: async(req,res) => {
        try {
            const data = await Blog.find();
            res.json(data);
        } catch (error) {
            res.json({error: error})
        }
    }
}