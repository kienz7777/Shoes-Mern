const Category = require("../models/category.model");

// Add new category
module.exports.addCategory = (req,res) => {
    const category = new Category(req.body);

    category.save((err,doc) => {
        if (err) return res.json({success: false, err});
        res.status(200).json({
            success: true,
            category: doc
        })
    });
}
