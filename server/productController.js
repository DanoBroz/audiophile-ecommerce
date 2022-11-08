const Product = require('./productModel')

exports.getProducts = async (req, res, next) => {
    const products = await Product.find().sort({ id: 1 })

    res.status(200).json({
        status: 'success',
        length: products.length,
        products,
    })
}
