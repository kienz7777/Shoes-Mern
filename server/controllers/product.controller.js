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

// Get 1 product 
// api/product/get?id=A
module.exports.getSingleProduct = (req,res) => {

    Product.find(
        {_id: req.query.id}
    ).
    populate('category').
    populate({
        path: 'colorProducts',
        populate: {
            path: 'color'
        }
    }).
    populate({ 
        path: 'colorProducts',
        populate: {
          path: 'sizeProducts',
          populate:{
              path: 'size'
          }
        } 
    }).
    populate({ 
        path: 'review',
        populate: {
            path: 'user',
            select: {'name':1}          // only choose name
          }
    }).
    exec((err,data) => {
        if (err) return res.send(err);
        res.status(200).send({data});       // send or json are ok 
    })
}