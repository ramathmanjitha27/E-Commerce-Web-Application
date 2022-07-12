const mongoose = require('mongoose');
const {text} = require("express");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    title : {
        type : text,
        required :true
    },
    description :{
        type : text,
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