import { useRef } from 'react'
import { PortalWithState } from 'react-portal'
import { ReactComponent as CartIcon } from '../assets/shared/desktop/icon-cart.svg'
import { useCart } from '../hooks'
import { useLocalStorageObject } from '../hooks/useLocalStorage'
import { Cart } from './Cart'

export const CartWrapper = () => {
    const iconRef = useRef<SVGSVGElement>(null)
    const { cartData, removeCartData } = useCart()

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
