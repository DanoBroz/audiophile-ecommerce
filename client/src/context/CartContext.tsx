import { createContext, Dispatch, PropsWithChildren, useReducer } from 'react'
import { CartItem } from '../types'

interface DispatchAction {
    type: 'CREATE_PRODUCT'
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
        switch (action.type) {
            case 'CREATE_PRODUCT':
                return [...state, action.payload]
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
