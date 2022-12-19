import type { ContextConfig, ProductData } from '../types'
import type { MouseEvent } from 'react'

interface UseCartProps {
    cartDispatch: ContextConfig['dispatch']
    counter?: number
    isItemInCart: boolean
}

export const useCart = (props: UseCartProps) => {
    const { cartDispatch, counter, isItemInCart } = props

    const addProductItem = (e: MouseEvent, productItem: ProductData) => {
        e.preventDefault()
        if (!!counter) {
            if (!isItemInCart) {
                return cartDispatch({
                    type: 'ADD_PRODUCT',
                    payload: {
                        id: productItem.id,
                        name: productItem.name,
                        amount: counter,
                        image: productItem?.image.desktop,
                        pricePerItem: productItem?.price || 0,
                    },
                })
            }
            return cartDispatch({
                type: 'CHANGE_PRODUCT',
                payload: {
                    id: productItem.id,
                    name: productItem.name,
                    amount: counter,
                    image: productItem?.image.desktop,
                    pricePerItem: productItem?.price || 0,
                },
            })
        }
    }

    return { addProductItem }
}
