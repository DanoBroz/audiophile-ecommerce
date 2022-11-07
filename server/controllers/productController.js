const Product = require('../models/productSchema')
const AppError = require('../utils/appError')
const catchAsync = require('../utils/catchAsync')

exports.getProducts = catchAsync(async (req, res, next) => {
    let products = await Product.find()
    console.log(products)

    if (!products) {
        return next(
            new AppError('There was a problem with finding your products', 500)
        )
    }

    res.status(200).json({
        status: 'success',
        data: {
            data: products,
        },
    })
})

exports.getProduct = catchAsync(async (req, res, next) => {
    req.params.id = req.params.id * 1
    let product = await Product.findOne({ id: req.params.id })

    if (!product) {
        return next(new AppError('There is no product with that id', 404))
    }

    res.status(200).json({
        status: 'success',
        data: {
            product,
        },
    })
})
