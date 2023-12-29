
  
  export const createProduct = async (req, res) => {
    try {
      // Extract data from request
      const { title, price, name } = req.body;
     
  
      // Create a new product
      await product.create({
        title,
        price,
        name,
        images,
      });
      
  
      // Save the product to the database
      
  
      // Send a JSON response
      res.json({
        success: true,
        message: 'Product uploaded successfully',
        data: product,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: 'Internal Server Error',
        error: error.message,
      });
    }
  };
