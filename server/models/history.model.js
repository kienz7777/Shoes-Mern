const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const historySchema = new mongoose.Schema({
    idUser:{
        type:Schema.Types.ObjectId,
        ref: 'User'               //  ref được sử dụng để cho Mongoose biết rằng trường này được join đến model nào
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