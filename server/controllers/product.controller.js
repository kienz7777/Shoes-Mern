const Product = require("../models/product.model");

// Add new product
module.exports.addProduct = async (req,res) => {

    try {
        // Create a new product
        const product = new Product(req.body);
        // Save
        product.save((err,doc) => {
            if (err) return res.json({success: false, err});
            res.status(200).json({
                success: true,
                doc
            })
        })

    } catch (error) {
        console.log(error);
    }
}