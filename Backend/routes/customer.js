import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import customer from '../models/customer.js'

const router = express.Router()

router.post('/register' , async(req,res)=>{
    try {
        const { customerName, customerEmail, customerPhone, customerPassword } = req.body

        const user = await customer.findOne({customerEmail})
        if(user) {
            console.log(customerName,
                customerEmail,
                customerPhone,
                customerPassword)
           return res.json('User already exists')
        }
            const hashPassword = await bcrypt.hash(customerPassword , 10)
            await customer.create({
                customerName,
            customerEmail,
            customerPhone,
            customerPassword: hashPassword
            })
            // console.log(hashPassword)
            console.log('new user added')
            
            res.json({
                success: "New User added"
            })
        
    }
    catch(err) {
        console.log(err)
    }
})

router.post('/login', async (req, res) => {
    const { customerEmail, customerPassword } = req.body 
    try {
        const customerData = await customer.findOne({ customerEmail }) 
        if (!customerData) {
            return res.json({ message: 'Customer not found' }) 
        }
        const validCustomer = await bcrypt.compare(customerPassword, customerData.customerPassword) 
        if (validCustomer) {
            const token = jwt.sign({ customerEmail }, process.env.user_token, { expiresIn: '1h' }) 
            req.session.userID = customerData._id
            console.log(req.userID)
            res.send( token ) 
        } else {
            res.json({ message: 'Invalid credentials' }) 
        }
    } catch (error) {
        console.log(error) 
        
    }
}) 

export default router