const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
require('dotenv').config()
const authRoutes = require('./src/routes/auth.routes')
// const getdateRoute = require('./src/routes/getdate.routes')
const ebookRoutes = require('./src/routes/ebook.routes')
const userRoutes = require('./src/routes/register.routes')

app.use(express.json())
app.use(express.urlencoded({extended: 'true'}))

app.use('/api/v1/', authRoutes)
app.use('/api/v1/', ebookRoutes)
app.use('/api/v1/', userRoutes)



mongoose.connect('mongodb+srv://'+ process.env.USER +':'+ process.env.PASSWORD +'@cluster0.ktbub.mongodb.net/'+ process.env.NAME +'?retryWrites=true&w=majority', 
{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    app.listen(port, () =>{
        console.log('Connected to DB Server !'+'\nlistening on port '+ port)
    })
})
.catch(err => console.log(err))
