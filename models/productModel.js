const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
        namee:{type:String, required:true},
        price:{type:Number, required:true},
        quantity:{type:Number, default:0}
},{timestamps:true});

const Product=mongoose.model('Product',productSchema);

module.exports=Product;