import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useState,
} from 'react'
import { CartItem } from '../types'

interface ContextConfig {
    cartItems?: CartItem[]
    setCartItems?: Dispatch<SetStateAction<CartItem[] | undefined>>
}

interface CartProviderProps {
    children: ReactNode
}

export const CartContext = createContext<ContextConfig>({})

export const CartContextProvider = ({ children }: CartProviderProps) => {
    const [cartItems, setCartItems] = useState<CartItem[]>()

    return (
        <CartContext.Provider value={{ cartItems, setCartItems }}>
            {children}
        </CartContext.Provider>
    )
}
