interface ProductImage {
    mobile: string
    tablet: string
    desktop: string
}

interface Others {
    slug: string
    name: string
    image: ProductImage
}

interface IncludesData {
    quantity: Number
    item: string
}

export interface ProductData {
    id: number
    slug: string
    name: string
    image: {
        mobile: string
        tablet: string
        desktop: string
    }
    category: string
    categoryImage: {
        mobile: string
        tablet: string
        desktop: string
    }
    new: boolean
    price: number
    description: string
    features: string
    includes: IncludesData[]
    gallery: {
        first: ProductImage
        second: ProductImage
        third: ProductImage
    }
    others: Others[]
}

interface ProductQueryData {
    product: ProductData
}

export interface ProductDataResponse {
    status: string
    data: ProductQueryData
}
