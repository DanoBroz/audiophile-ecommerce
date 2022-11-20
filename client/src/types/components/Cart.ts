import type { ProductData } from './../product'
export interface CartItem {
    name: string
    amount: number
    image?: string
    pricePerItem: number
}

export interface ReduceCartItemProps {
    cartItem: CartItem
}

export interface AddCartItemProps {
    counter: number
    productData?: ProductData
}
