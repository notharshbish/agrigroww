import express from 'express'
import {db} from '../server.js'

export const cartRouter = express.Router()

cartRouter.post('/add' , async(req,res) => {
    db.query('insert into cart_items(user_id,product_id) values (?,?)', [req.body.userId, req.body.productId] , (err,data) => {
        if(err) console.log(err)
        res.end()
    })
})

cartRouter.get('/:id', async (req,res) => {
    db.query('select * from cart_items natural join farm_products where user_id = ?' , [req.params.id] , (err,data) => {
        if(err)console.log(err)
        res.json(data)
    })
})