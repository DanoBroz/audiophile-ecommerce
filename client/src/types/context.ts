import type { Dispatch } from 'react'
import type { CartItem } from './components'

export interface DispatchAction {
    type:
        | 'ADD_PRODUCT'
        | 'CHANGE_PRODUCT'
        | 'ADD_AMOUNT'
        | 'REDUCE_AMOUNT'
        | 'DELETE_PRODUCT'
        | 'REMOVE_ALL'
    payload: CartItem
}

export interface CartState {
    cartItems: CartItem[]
    totalAmount: number
}

export interface ContextConfig {
    cartState: CartState
    dispatch: Dispatch<DispatchAction>
}
