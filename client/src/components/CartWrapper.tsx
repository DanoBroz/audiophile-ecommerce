import { useContext, useRef } from 'react'
import { PortalWithState } from 'react-portal'
import { ReactComponent as CartIcon } from '../assets/shared/desktop/icon-cart.svg'
import { CartContext } from '../context'
import { Cart } from './Cart'

export const CartWrapper = () => {
    const iconRef = useRef<SVGSVGElement>(null)
    const { cartState } = useContext(CartContext)

    const cartItemsNumber = cartState.cartItems.length

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

                return (
                    <>
                        <div className='relative'>
                            <CartIcon
                                ref={iconRef}
                                onClick={openPortal}
                                id='cartIcon'
                                className='relative hover:cursor-pointer'
                            />
                            {cartItemsNumber && (
                                <span className='absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-Orange-dark text-xs text-White-shade'>
                                    {cartItemsNumber}
                                </span>
                            )}
                        </div>
                        {portal(
                            <Cart
                                cartData={cartState.cartItems}
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
