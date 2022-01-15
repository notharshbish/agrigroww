import express from 'express' 
import {db} from '../server.js'

export const farmerRouter = express.Router()

farmerRouter.post('/add' , async(req,res) =>  {
    const {name,email,phone,location,address} = req.body
    db.query('insert into farmers(farmer_name,farmer_email,farmer_phone,farmer_location,farmer_address) values (?,?,?,?,?)', [name, email,phone,location,address] , (err , farmer) => {
        db.query('select last_insert_id()' , (err,id) => {
            db.query("insert into carts(farmer_id,no_of_items) values (?,?)", [id[0]["last_insert_id()"], 0])
            res.end()
        })
    })
})

farmerRouter.post('/edit/:id/:key/:value' , async(req,res) => {
    db.query(`update farmers set farmer_${req.params.key} = '${req.params.value}' where farmer_id = ${req.params.id}` , (err,data) => {
        if(err) console.log(err)
        res.end()
    })
})

farmerRouter.get('/category', async (req,res) => {
    // console.log('Yeh request jaa bhi rhi hai kya')
    db.query('select * from product_categories' , (err,data) => {
        if(err) console.log(err)
        console.log(req)
        res.json(data)
        res.end()
    })
})

farmerRouter.get('/latest' , async (req,res) => {
    db.query('select * from farm_products'  , (err,data) => {
        if(err) console.log(err)
        res.json(data)
        res.end()
    })
})