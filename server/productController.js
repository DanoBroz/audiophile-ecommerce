const Product = require('./productModel')

exports.getProducts = async (req, res, next) => {
    const products = await Product.find().sort({ id: 1 })

    res.status(200).json({
        status: 'success',
        length: products.length,
        products,
    })
}

exports.getProduct = async (req, res, next) => {
    let product = await Product.findOne({ slug: req.params.slug })

    if (!product) {
        return next(
            new Error('The product you are trying to find does not exist')
        )
    }

    res.status(200).json({
        status: 'success',
        data: {
            product,
        },
    })
}
