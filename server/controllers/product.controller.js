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

// Get all products by ARRIVAL
// api/product/get/?sortBy=createdAt&order=desc&limit=8
module.exports.getAllProductsByArrival = (req, res) => {

    // let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
    // let order = req.query.order ? req.query.order : 'asc';
    let limit = req.body.limit ? parseInt(req.body.limit) : 100
    let skip = parseInt(req.body.skip);    // vì xài pagination của hook nên mặc định currentPage = 1 nên phải trừ xuống cho skip = 0
    let findArgs = {};

    //Lấy filters bỏ vào findArgs để get SP theo filters
    for (let key in req.body.filters){
        if (req.body.filters[key].length > 0){
            if (key == "colorProducts.price")  {
                findArgs[key] = {
                    // Greater than equal
                    $gte: req.body.filters[key][0],
                    // Less than equal
                    $lte: req.body.filters[key][1]
                }
            }       
            else {
                findArgs[key] = req.body.filters[key];
            }
        }
    }
    console.log(findArgs);

    Product.
    find(findArgs).
    populate('category').
    populate({ 
        path: 'colorProducts',
        populate: {
          path: 'color'
        } 
    }).
    populate({ 
        path: 'review',
        populate: {
          path: 'user',
          select: {'name':1}
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
    // sort({sortBy: order}).
    limit(limit).
    skip(skip).
    exec((err, data)=>{
        if (err) return res.send(err);
        res.status(200).send({data});
    })
}

// Update product by ID
module.exports.updateProduct = (req, res) => {

    Product.findByIdAndUpdate(
        {_id : req.query.id},
        { $set : req.body},
        (err, data)=>{
            if (err) return res.send(err);
            res.status(200).send(data);
        }
    )
}
