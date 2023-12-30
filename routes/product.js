import express from 'express'
import multer from 'multer'
import Product from '../models/product.js'

const router = express.Router()

 

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.originalname
    )
  },
})

// Initialize upload
const upload = multer({
  storage: storage,
})

router.post('/', upload.single('images'), async (req, res) => {
  try {
    const { title, price,category, name } = req.body
    console.log(req.file)
    // Check if a file was uploaded
    if (!req.file || !req.file.originalname) {
      return res.status(400).json({
        success: false,
        message: 'No valid image was uploaded.',
      })
    }

    // Create a new product
    const newProduct = await Product.create({
      title,
      price,
      name,
      category,
      images: req.file.originalname, // Store only the file name
    })

    // Send a JSON response
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
