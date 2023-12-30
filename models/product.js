import mongoose from "mongoose";
import path from "path";
 
const productSchema = mongoose.Schema({
    title: String,
    price: Number,
    name: String,
    category: String,
    images:String

});

const product = mongoose.model('Product', productSchema); // Change the model name to 'Product'
export default product;
