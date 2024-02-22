import { Auth } from '../controllers/auth.js'
import customerCart from '../models/cart.js'
import customer from '../models/customer.js'
import express from 'express'
import jwt from 'jsonwebtoken'

// import product from '../models/product'

const router = express.Router()

router.get('/cart' , Auth , async (req, res)=>{
    try{
        const custID= req.session.userID
        console.log(custID)
        const cartItems = await customerCart.findOne({customer: custID})
        .populate('customer')
        .populate('product')
        
        res.json({
            cartItems
        })
    }
    catch(err){
        console.log(err)
    }
})

router.post('/additem/:id', Auth, async (req,res)=>{
    try {
        // const custID= req.userID
        // console.log(custID)
        // const token = req.headers.authorization.split(' ')[1]
        // const decodedToken = jwt.verify(token, process.env.user_token)
        // console.log(decodedToken)

        const custID = req.session.userID
        const productId = req.params.id

        // const productItem = await product.findOne({_id: productId})
        
        let cart = customerCart.findOne({customer: custID})

        if(!cart) {
            await customerCart.create({
                customer: custID,
                product: productId
            })
            res.json('New cart created for new user')
        }
        else {
            await customerCart.findOneAndUpdate({customer: custID} , {$push: {product: productId}})
            res.send('New item added')
        }

        console.log(custID)

    //    await customerCart.create({
    //         customer: custID,
    //         product: productId
    //     })

        // await customerCart.insertOne({
        //     product: [productId]
        // })
        res.json('New item added')
    } catch (err) {
        console.log(err)
    }
})

export default router