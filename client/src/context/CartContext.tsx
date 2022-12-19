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

interface CartState {
    cartItems: CartItem[]
    totalAmount: number
}

interface ContextConfig {
    cartState: CartState
    dispatch: Dispatch<DispatchAction>
}

export const CartContext = createContext<ContextConfig>({
    cartState: {
        cartItems: [],
        totalAmount: 0,
    },
    dispatch: () => null,
})

export const CartContextProvider = ({ children }: PropsWithChildren) => {
    const reducer = (state: CartState, action: DispatchAction) => {
        const itemInCart = state.cartItems.find(
            (item) => item.id === action.payload?.id
        )

        const itemIndex = indexOf(state.cartItems, itemInCart)

        const totalAmount = state.cartItems.reduce(
            (accumulator, object) =>
                accumulator + object.amount * object.pricePerItem,
            0
        )

        switch (action.type) {
            case 'ADD_PRODUCT':
                return {
                    cartItems: [...state.cartItems, action.payload],
                    totalAmount:
                        totalAmount +
                        action.payload.amount * action.payload.pricePerItem,
                }
            case 'CHANGE_PRODUCT':
                const productArray = [...state.cartItems].filter(
                    (item) => item.id !== itemInCart?.id
                )
                return !!itemInCart
                    ? {
                          cartItems: [...productArray, action.payload],
                          totalAmount,
                      }
                    : state
            case 'ADD_AMOUNT':
                const addArr = [...state.cartItems]
                let addAmount = addArr[itemIndex].amount

                addArr[itemIndex] = {
                    ...addArr[itemIndex],
                    amount: (addAmount += 1),
                }

                return !!itemInCart
                    ? {
                          cartItems: [...addArr],
                          totalAmount: totalAmount + itemInCart.pricePerItem,
                      }
                    : state
            case 'REDUCE_AMOUNT':
                const reduceArr = [...state.cartItems]
                let reduceAmount = reduceArr[itemIndex].amount
                reduceArr[itemIndex] = {
                    ...reduceArr[itemIndex],
                    amount: (reduceAmount -= 1),
                }
                return !!itemInCart
                    ? {
                          cartItems: [...reduceArr],
                          totalAmount: totalAmount - itemInCart.pricePerItem,
                      }
                    : state
            case 'DELETE_PRODUCT':
                return !!itemInCart
                    ? {
                          cartItems: state.cartItems.filter(
                              (item) => item.id !== itemInCart?.id
                          ),
                          totalAmount: totalAmount - itemInCart.pricePerItem,
                      }
                    : state
            case 'REMOVE_ALL':
                return { cartItems: [], totalAmount: 0 }
            default:
                return state
        }
    }

    const [cartState, dispatch] = useReducer(reducer, {
        cartItems: [],
        totalAmount: 0,
    })

    return (
        <CartContext.Provider value={{ cartState, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}
