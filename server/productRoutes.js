const express = require('express')
const productController = require('./productController')

const router = express.Router()

router.route('/').get(productController.getProducts)
router.route('/:slug').get(productController.getProduct)

module.exports = router
