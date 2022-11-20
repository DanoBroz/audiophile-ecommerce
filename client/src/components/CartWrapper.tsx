import { useEffect, useRef, useState } from 'react'
import { PortalWithState } from 'react-portal'
import { ReactComponent as CartIcon } from '../assets/shared/desktop/icon-cart.svg'
import { useCart } from '../hooks'
import { CartItem } from '../types'
import { Cart } from './Cart'

export const CartWrapper = () => {
    const cart = localStorage.getItem('cart')
    const iconRef = useRef<SVGSVGElement>(null)
    const { getCartData, removeCartData } = useCart()
    const [cartData, setCartData] = useState<CartItem[] | undefined>(
        getCartData()
    )
    const [isCartOpen, setIsCartOpen] = useState(false)

    useEffect(() => {
        if (cartData !== (cart && [...JSON.parse(cart)]))
            setCartData(getCartData())
        console.log(cartData)
    }, [isCartOpen])

    const stopBodyScroll = (isModalOpen: boolean) => {
        isModalOpen
            ? document.body.classList.add('relative', 'overflow-hidden')
            : document.body.classList.remove('relative', 'overflow-hidden')
    }

    return (
        <PortalWithState
            closeOnOutsideClick
            closeOnEsc
        >
            {({ openPortal, closePortal, isOpen, portal }) => {
                stopBodyScroll(isOpen)
                setIsCartOpen((prevState) => !prevState)

                return (
                    <>
                        <CartIcon
                            ref={iconRef}
                            onClick={openPortal}
                            id='cartIcon'
                            className='hover:cursor-pointer'
                        />
                        {portal(
                            <Cart
                                cartData={cartData}
                                removeCart={removeCartData}
                                iconRef={iconRef}
                                closePortal={closePortal}
                            />
                        )}
                    </>
                )
            }}
        </PortalWithState>
    )
}
