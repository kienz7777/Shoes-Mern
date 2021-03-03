const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const cartSchema = mongoose.Schema({
    idProduct:{
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    idColorProduct:{
        type: Schema.Types.ObjectId,
        ref: 'ColorProduct',
        required: true
    },
    idSize:{
        type: Schema.Types.ObjectId,
        ref: 'SizeProduct',
        required: true
    },
    idUser:{
        type: String        // No need "ref" because It will get data user when user login
    }
},{timestamps: true})

module.exports = mongoose.model('Cart', cartSchema);