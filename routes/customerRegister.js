import express from 'express'

import customer from '../models/customer.js'

const router = express.Router()

router.post('/' , async(req,res)=>{
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
            await customer.create({
                customerName,
            customerEmail,
            customerPhone,
            customerPassword
            })
            
            console.log('new user added')
            res.json({
                success: "New User added"
            })
        
    }
    catch(err) {
        console.log(err)
    }
})

export default router