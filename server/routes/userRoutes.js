import express from 'express'
import {db} from '../server.js'

export const userRouter = express.Router()

userRouter.post('/register/:type' , async(req,res) => {
    console.log(req.body)
    if(req.params.type === 'Farmer') {
        db.query('insert into farmers (name,email,password) values (?,?,?)', [req.body.name, req.body.email,req.body.password] , (err,data) => {
            if(err) console.log(err)
            db.query('select last_insert_id()' , (err,id) => {
                db.query("insert into carts(user_id,no_of_items) values (?,?)", [id[0]["last_insert_id()"], 0])
                res.end()
            })
            // res.end()
        })
    } else {
            db.query('insert into business (name, email, password) values (?,?,?)', [req.body.name, req.body.email, req.body.password] , (err,data) => {
            if(err) console.log(err)
            db.query('select last_insert_id()' , (err,id) => {
                db.query("insert into carts(user_id,no_of_items) values (?,?)", [id[0]["last_insert_id()"], 0])
                res.end()
            })
            // res.json(data)
            // res.end()
        })
    }
})

userRouter.post('/login/:type', async(req,res) => {
    if(req.params.type === 'Farmer') {
        db.query('select * from farmers where email = ?', [req.body.email] , (err,data) => {
            if(err) console.log(err)
            res.json(data[0])
            res.end()
        })
    } else {
            db.query('select * from business where email = ?', [req.body.email] , (err,data) => {
            if(err) console.log(err)
            res.json(data[0])
            res.end()
        })
    }
})