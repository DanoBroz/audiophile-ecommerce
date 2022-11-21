import { useLocalStorageObject } from './useLocalStorage'
import type {
    AddCartItemProps,
    CartItem,
    ReduceCartItemProps,
} from './../types/components/Cart'
import { indexOf } from 'lodash'

export const useCart = () => {
    const cart = localStorage.getItem('cart')
    const cartItems: CartItem[] = cart ? [...JSON.parse(cart)] : []
    const { value: cartData, updatedSetValue } = useLocalStorageObject(
        'cart',
        cartItems
    )

    const removeCartData = () => {
        return localStorage.setItem('cart', '')
    }

    const handleReduce = ({ cartItem }: ReduceCartItemProps) => {
        const itemInCart = cartItems.find((item) => item.name === cartItem.name)
        const itemIndex = indexOf(cartItems, itemInCart)

        if (cartItems[itemIndex].amount > 1) {
            cartItems[itemIndex].amount -= 1
            return updatedSetValue(cartItems)
        }

        cartItems.splice(itemIndex, 1)
        updatedSetValue(cartItems)
    }

    const handleAdd = ({ cartItem }: ReduceCartItemProps) => {
        const itemInCart = cartItems.find((item) => item.name === cartItem.name)
        const itemIndex = indexOf(cartItems, itemInCart)
        if (cartItems[itemIndex].amount < 10) cartItems[itemIndex].amount += 1
        updatedSetValue(cartItems)
    }

    const handleAddToCart = ({ counter, productData }: AddCartItemProps) => {
        if (!cart) localStorage.setItem('cart', '')
        const cartItems: CartItem[] = cart ? [...JSON.parse(cart)] : []

        const itemKey = productData?.name
        const itemKeyInCart =
            itemKey && cartItems.some((item) => item.name === itemKey)

        if (itemKeyInCart) {
            const itemInCart = cartItems.find((item) => item.name === itemKey)
            const itemIndex = indexOf(cartItems, itemInCart)
            cartItems[itemIndex].amount += counter
            updatedSetValue(cartItems)
        } else if (typeof itemKey !== 'undefined') {
            cartItems.push({
                name: itemKey,
                amount: counter,
                image: productData?.image.desktop,
                pricePerItem: productData?.price || 0,
            })
            updatedSetValue(cartItems)
        }
    }

    return {
        handleAdd,
        handleAddToCart,
        cartData,
        removeCartData,
        handleReduce,
    }
}
