import express from 'express';
import Product from '../models/product.js';

const router = express.Router();




router.get('/',  async (req, res) => {
 
    try{
       const products =  await Product.find()
       const productList = [...products]
       console.log(productList)
       res.json(
        productList
       ).status(200)
    }
    catch(err) {
        console.log(err)
    }
});

export default router;
