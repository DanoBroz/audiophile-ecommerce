const express = require('express')
const productRouter = require('./productRoutes')

const app = express()

app.use(express.static('public'))

app.use(express.json())

app.use('/api/v1/products', productRouter)

module.exports = app
