const express = require('express')
const productController = require('./productController')

const router = express.Router()

router.route('/').get(productController.getProducts)

module.exports = router
