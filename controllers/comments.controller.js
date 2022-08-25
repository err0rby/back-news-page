const { json } = require('express');
const Comment = require('../models/Comment.model');

module.exports.commentsController = {
    addComment: async (req, res) => {
        const { user, text, blogs } = req.body;
        try {
            const data = await Comment.create({
                user,
                text,
                blogs
            })
            return res.json(data);
        } catch (error) {
            res.json(error)
        }
    },

    getComment: async (req, res) => {
        try {
            const data = await Comment.find();
            res.json(data);
        } catch (error) {
            res.json({ error })
        }
    },

    deleteComment: async (req, res) => {
        try {
            const data = await Comment.findByIdAndDelete(req.params.id)
            res.json(data);
        } catch (error) {
            res.json(error)
        }
    }
}