import dotenv from 'dotenv';
dotenv.config();

import express from "express"
import path from "path"
import bodyParser from "body-parser";
const app = express() 

const __dirname = path.resolve();




import {db} from "./config/db.js"
import productRoutes from "./routes/product.js"
import productList from "./routes/getproducts.js"

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use('/uploads', express.static('uploads'))
app.use(express.json());

//routes
app.use('/addproduct', productRoutes)
app.use('/getproducts', productList)

app.listen(3000, async()=>{
  try{
    await db() 
    console.log("server listening") 
  }
  catch(err) {
    console.log(err)
  }
})