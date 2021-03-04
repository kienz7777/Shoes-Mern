const mongoose = require('mongoose');
colorProductSchema = require("../models/color_product").schema;

const Schema = mongoose.Schema;
const productShema = new mongoose.Schema(
    { 
        name: {
            required: true,
            type: String,
            unique: 1,
            maxlength:100
        },
        description:{
            required: true,
            type: String,
            maxlength:10000
        },
        category:{
            type: Schema.Types.ObjectId, // only one flied id is joined
            ref: 'Category',      //  ref is used for Mongoose knows the model field is joined to   
            required: true
        },
        review:[
            {
                type: Schema.Types.ObjectId,
                ref: 'Review'
            }
        ],
        active:{
            required: true,
            type:Boolean
        },
        colorProducts:[colorProductSchema]      //  Subdocument : nest document; when you add ColorProduct(with field product(ColorProduct) === _id(Product)) then ColorProduct inside here
    },{timestamps:true});

module.exports = mongoose.model('Product', productShema);
