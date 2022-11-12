import { useRef } from 'react'
import { PortalWithState } from 'react-portal'
import { ReactComponent as CartIcon } from '../assets/shared/desktop/icon-cart.svg'
import { useCartPosition } from '../hooks'

export const Cart = () => {
    const IconRef = useRef<SVGSVGElement>(null)
    const iconRect = IconRef.current?.getBoundingClientRect()

    const cartPosition = useCartPosition(iconRect)

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
                            ref={IconRef}
                            onClick={openPortal}
                            id='cartIcon'
                            className='hover:cursor-pointer'
                        />
                        {portal(
                            <div
                                className='absolute inset-0 flex items-center justify-center bg-black/20'
                                onClick={closePortal}
                            >
                                <div
                                    onClick={(e) => e.stopPropagation()}
                                    style={{
                                        top: `calc(30px + ${cartPosition.y}px)`,
                                        left: `calc(${cartPosition.x}px - 650px)`,
                                    }}
                                    className={`absolute bg-white`}
                                >
                                    This is more advanced Portal. It handles its
                                    own state.{' '}
                                    <button onClick={closePortal}>
                                        Close me!
                                    </button>
                                    , hit ESC or click outside of me.
                                </div>
                            </div>
                        )}
                    </>
                )
            }}
        </PortalWithState>
    )
}
