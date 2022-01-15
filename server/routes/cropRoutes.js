import express from 'express' 
import {db} from '../server.js'

export const cropRouter = express.Router()

cropRouter.get('/:type' , async(req,res) => {
    db.query('select * from farm_products where product_type = ?', [req.params.type] , (err,data) => {
        if(err) console.log(err)
        res.json(data)
    })
})

cropRouter.get('/tech' , async(req,res) => {
    db.query('select * from tech_products', (err,data) => {
        if(err) console.log(err)
        console.log(data)
        res.json(data)
    })
})