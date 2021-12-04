const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productSchema = new Schema ({
    name:{
        type: String,
        maxlength: 64,
        unique: true,
        required: true,
    },
    desc:{
        type: String,
        maxlength:255,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    }
}, {
        collection: 'products'
    }
)

module.exports = mongoose.model('Product', productSchema)