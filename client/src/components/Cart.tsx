import { RefObject, useContext } from 'react'
import { PortalFunctionParams } from 'react-portal'
import { Button } from './Button'
import type { CartItem } from '../types'
import { CartContext } from '../context'
import { CartContent } from './CartContent'
import { useCartUI } from '../hooks'

interface CartConfig {
    iconRef: RefObject<SVGSVGElement>
    cartData?: CartItem[]
}

type CartProps = Pick<PortalFunctionParams, 'closePortal'> & CartConfig

export const Cart = (props: CartProps) => {
    const { closePortal, iconRef, cartData } = props
    const { cartState, dispatch } = useContext(CartContext)

    const {
        modalRef,
        cartPosition,
        iconElementWidth,
        modalWidth,
        navigateToCheckout,
        isCheckout,
    } = useCartUI({ closePortal, iconRef })

    return (
        <div
            className='absolute inset-0 flex items-center justify-center bg-black/20'
            onClick={closePortal}
        >
            <div
                ref={modalRef}
                onClick={(e) => e.stopPropagation()}
                style={{
                    top: `calc(77px + ${cartPosition.y}px)`,
                    left: `calc(${cartPosition.x}px + ${iconElementWidth}px - ${modalWidth}px)`,
                }}
                className='absolute grid w-[377px] rounded-lg bg-white p-8'
            >
                <div className='flex justify-between pb-8'>
                    <h6>cart ({cartData?.length || 0})</h6>
                    <span
                        onClick={() =>
                            dispatch({
                                type: 'REMOVE_ALL',
                                payload: {
                                    name: '',
                                    amount: 0,
                                    id: 0,
                                    pricePerItem: 0,
                                },
                            })
                        }
                        className='inline-block cursor-pointer text-black/50 underline'
                    >
                        Remove all
                    </span>
                </div>
                <CartContent
                    cartState={cartState}
                    dispatch={dispatch}
                />
                <div className='flex justify-between pb-6'>
                    <span className='inline-block uppercase text-black/50'>
                        total
                    </span>
                    <h6>$ {cartState.totalAmount.toLocaleString()}</h6>
                </div>
                <Button
                    onClick={navigateToCheckout}
                    disabled={isCheckout}
                    className='justify-center'
                >
                    checkout
                </Button>
            </div>
        </div>
    )
}
