const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    id: {
        type: Number,
    },
    slug: {
        type: String,
    },
    name: {
        type: String,
    },
    image: {
        mobile: {
            type: String,
        },
        tablet: {
            type: String,
        },
        desktop: {
            type: String,
        },
    },
    category: {
        type: String,
    },
    categoryImage: {
        mobile: {
            type: String,
        },
        tablet: {
            type: String,
        },
        desktop: {
            type: String,
        },
    },
    new: {
        type: Boolean,
    },
    price: {
        type: Number,
    },
    description: {
        type: String,
    },
    features: {
        type: String,
    },
    gallery: {
        first: {
            mobile: {
                type: String,
            },
            tablet: {
                type: String,
            },
            desktop: {
                type: String,
            },
        },
        second: {
            mobile: {
                type: String,
            },
            tablet: {
                type: String,
            },
            desktop: {
                type: String,
            },
        },
        third: {
            mobile: {
                type: String,
            },
            tablet: {
                type: String,
            },
            desktop: {
                type: String,
            },
        },
    },
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product
