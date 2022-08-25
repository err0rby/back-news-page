const Category = require('../models/Category.model');

module.exports.categoryController = {
    addCategory: async (req, res) => {
        const { name } = req.body;
        try {
            const data = await Category.create({
                name
            })
            res.json(data)
        } catch (error) {
            res.json({ error: error })
        }
    },
    getCat: async (req, res) => {
        try {
            const data = await Category.find();
            res.json(data)
        } catch (error) {
            res.json({ error: error })
        }
    }
}