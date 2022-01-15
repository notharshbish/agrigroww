import express from 'express' 
import mysql from 'mysql' 
import cors from 'cors' 
import dotenv from 'dotenv' 
import { farmerRouter } from './routes/farmerRoutes.js'
import { cropRouter } from './routes/cropRoutes.js'
import { userRouter } from './routes/userRoutes.js'
import {cartRouter } from './routes/cartRoutes.js'


//App config
const app = express() 
const PORT = process.env.PORT || 5000 
dotenv.config()

//db config
export const db = mysql.createConnection({
	host : "localhost" , 
	user : "root" , 
	password : process.env.DB_PASSWORD , 
	database  : "agrigrow" 
})
db.connect((err,data) => {
	if(err) console.log(err)
	app.listen(PORT, () => {console.log(`Server is running at port ${PORT}`)}) 
	console.log("Database connected successfully")
})

//App middlewares
app.use(cors())
app.use(express.json())

//App routes middlwares
app.use('/farmer' , farmerRouter)
app.use('/product' , cropRouter)
app.use('/user' , userRouter)
app.use('/cart', cartRouter)
