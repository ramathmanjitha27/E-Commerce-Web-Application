const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    title : {
        type : String,
        required :true
    },
    description :{
        type : String,
        required: true
    },
    price : {
        type : Number,
        required : true
    },
    quantity  : {
        type : Number
    }
})

Item = mongoose.model("item", ItemSchema)
module.exports =Item;