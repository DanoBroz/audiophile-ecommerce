const mongoose = require('mongoose')

const othersSchema = new mongoose.Schema({
    slug: String,
    name: String,
    image: {
        mobile: String,
        tablet: String,
        desktop: String,
    },
})

const includesSchema = new mongoose.Schema({
    quantity: Number,
    item: String,
})

const productSchema = new mongoose.Schema({
    id: Number,
    slug: String,
    name: String,
    image: {
        mobile: String,
        tablet: String,
        desktop: String,
    },
    category: String,
    categoryImage: {
        mobile: String,
        tablet: String,
        desktop: String,
    },
    new: Boolean,
    price: Number,
    description: String,
    features: String,
    includes: [includesSchema],
    gallery: {
        first: {
            mobile: String,
            tablet: String,
            desktop: String,
        },
        second: {
            mobile: String,
            tablet: String,
            desktop: String,
        },
        third: {
            mobile: String,
            tablet: String,
            desktop: String,
        },
    },
    others: [othersSchema],
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product
