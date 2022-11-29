import type { ProductData } from './../product'
export interface CartItem {
    name: string
    amount: number
    image?: string
    pricePerItem: number
}
