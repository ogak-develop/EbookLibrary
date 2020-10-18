const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const authRoutes = require('./src/routes/auth.routes')
const ebookRoutes = require('./src/routes/ebook.routes')
const userRoutes = require('./src/routes/register.routes')
const mainRoutes = require('./src/routes/main.routes')
const port = process.env.PORT || 8080
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

//API Documentation
const apiDoc = {
    definition: {
        inf0: {
            title: 'Ebook Library API',
            version: '1.0.0'
        },
    },
    apis = ['app.js']
}

const swaggerDoc = swaggerJsDoc(apiDoc)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: 'true'}))

app.use('/api/v1/', authRoutes)
app.use('/api/v1/', ebookRoutes)
app.use('/api/v1/', userRoutes)
app.use('/', mainRoutes)


mongoose.connect('mongodb+srv://'+ process.env.USER +':'+ process.env.PASSWORD +'@cluster0.ktbub.mongodb.net/'+ process.env.NAME +'?retryWrites=true&w=majority', 
{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    app.listen(port, () =>{
        console.log('Connected to DB Server !'+'\nlistening on port '+ port)
    })
})
.catch(err => console.log(err))

