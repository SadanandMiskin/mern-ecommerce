import express from 'express'
import multer from 'multer'
import Product from '../models/product.js'

const router = express.Router()

 

const storage = multer.memoryStorage()

// Initialize upload
const upload = multer({
  storage: storage,
})

router.post('/', upload.array('images' , 3), async (req, res) => {
  try {
    const { productName, price,  sellerName, category } = req.body
    
    const images = req.files.map((file) => ({
      data: file.buffer,
      contentType: file.mimetype,
    }))
    
    // Create a new product
    const newProduct = await Product.create({
      productName,
      price,
      sellerName,
      category,
      images:images
    })

  
    res.json({
      success: true,
      message: 'Product uploaded successfully',
      data: newProduct,
    })
  } catch (error) {
    console.error(error)
    res.json({
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    })
  }
})

export default router
