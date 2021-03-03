const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const historySchema = new mongoose.Schema({
    idUser:{
        type:Schema.Types.ObjectId,  // only one flied id is joined
        ref: 'User'               //  ref is used for Mongoose knows the model field is joined to
    },
    idProduct: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    idColorProduct: {
        type: Schema.Types.ObjectId,
        ref: 'ColorProduct'
    },
    idSize:{
        type: String
    },
    quantity: {
        type: Number
    },
    totalPrice:{
        type: Number
    }
},{timestamps: true});

module.exports = mongoose.model('History',historySchema);