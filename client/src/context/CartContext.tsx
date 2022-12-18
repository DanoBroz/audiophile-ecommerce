import { indexOf } from 'lodash'
import { createContext, Dispatch, PropsWithChildren, useReducer } from 'react'
import { CartItem } from '../types'

interface DispatchAction {
    type:
        | 'ADD_PRODUCT'
        | 'CHANGE_PRODUCT'
        | 'ADD_AMOUNT'
        | 'REDUCE_AMOUNT'
        | 'DELETE_PRODUCT'
        | 'REMOVE_ALL'
    payload: CartItem
}

interface ContextConfig {
    cartItems: CartItem[]
    dispatch: Dispatch<DispatchAction>
}

export const CartContext = createContext<ContextConfig>({
    cartItems: [],
    dispatch: () => null,
})

export const CartContextProvider = ({ children }: PropsWithChildren) => {
    const reducer = (state: CartItem[], action: DispatchAction) => {
        const itemInCart = state.find((item) => item.id === action.payload?.id)
        switch (action.type) {
            case 'ADD_PRODUCT':
                return [...state, action.payload]
            case 'CHANGE_PRODUCT':
                const stateArray = [...state].filter(
                    (item) => item.id !== itemInCart?.id
                )
                return !!itemInCart ? [...stateArray, action.payload] : state
            case 'ADD_AMOUNT':
                const newArray = state.filter(
                    (item) => item.id !== itemInCart?.id
                )

                return !!itemInCart
                    ? [
                          ...newArray,
                          {
                              ...state[indexOf(state, itemInCart)],
                              amount: itemInCart.amount + 1,
                          },
                      ]
                    : state
            case 'REDUCE_AMOUNT':
                const filteredAmount = state.filter(
                    (item) => item.id !== itemInCart?.id
                )

                return !!itemInCart
                    ? [
                          ...filteredAmount,
                          {
                              ...state[indexOf(state, itemInCart)],
                              amount: itemInCart.amount - 1,
                          },
                      ]
                    : state
            case 'DELETE_PRODUCT':
                return !!itemInCart
                    ? state.filter((item) => item.id !== itemInCart?.id)
                    : state
            case 'REMOVE_ALL':
                return []
            default:
                return state
        }
        throw Error('Unknown action: ' + action.type)
    }

    const [cartItems, dispatch] = useReducer(reducer, [])

    return (
        <CartContext.Provider value={{ cartItems, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}
