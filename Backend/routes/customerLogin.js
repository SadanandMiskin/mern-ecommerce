import express from 'express'

import customer from '../models/customer.js'
import passport from 'passport'

const router = express.Router()

// router.get('/' , (req,res)=>{
//     res.render('login')
// })

router.post('/' ,passport.authenticate("local"), async(req,res) =>{
    res.json('Authenticated')
})


export default router