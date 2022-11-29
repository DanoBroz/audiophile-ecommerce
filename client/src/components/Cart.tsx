import { RefObject, useRef } from 'react'
import { PortalFunctionParams } from 'react-portal'
import { useCartPosition } from '../hooks/useCartPosition'
import { Counter } from './Counter'
import { Button } from './Button'
import type { CartItem } from '../types'
import { useCart } from '../hooks'
import { useLocation, useNavigate } from 'react-router-dom'

interface CartConfig {
    iconRef: RefObject<SVGSVGElement>
    cartData?: CartItem[]
    removeCart?: () => void
}

type CartProps = Pick<PortalFunctionParams, 'closePortal'> & CartConfig

export const Cart = (props: CartProps) => {
    const { closePortal, iconRef, removeCart, cartData } = props
    const navigate = useNavigate()
    const location = useLocation()

    const isCheckout = location.pathname.split('/')[1] === 'checkout'

    const iconRect = iconRef.current?.getBoundingClientRect()
    const iconElementWidth = iconRef.current?.getBBox().width

    const modalRef = useRef<HTMLDivElement>(null)
    const modalWidth = modalRef.current?.offsetWidth

    const cartPosition = useCartPosition(iconRect)

    const { handleAdd, handleReduce } = useCart()

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
                        onClick={removeCart}
                        className='inline-block cursor-pointer text-black/50 underline'
                    >
                        Remove all
                    </span>
                </div>
                {cartData?.length ? (
                    cartData?.map((cartItem) => (
                        <div className='flex items-center justify-between pb-8'>
                            <div className='flex gap-4'>
                                <div
                                    style={{
                                        backgroundImage: `url('../${cartItem.image}')`,
                                    }}
                                    className='h-16 w-16 rounded-lg bg-cover bg-center bg-no-repeat'
                                ></div>
                                <div className='flex flex-col font-bold'>
                                    <span className='uppercase'>
                                        {cartItem.name.split(' ')[0]}
                                    </span>
                                    <span className='text-sm leading-[25px] tracking-normal text-black/50'>
                                        $ {cartItem.pricePerItem}
                                    </span>
                                </div>
                            </div>
                            <Counter
                                counterType='small'
                                substraction={() => handleAdd({ cartItem })}
                                counterValue={cartItem.amount}
                                addition={() => handleReduce({ cartItem })}
                            />
                        </div>
                    ))
                ) : (
                    <p className='pb-4'>Your cart is empty</p>
                )}
                <div className='flex justify-between pb-6'>
                    <span className='inline-block uppercase text-black/50'>
                        total
                    </span>
                    <h6>$ 5,396</h6>
                </div>
                <Button
                    onClick={() => navigate('/checkout')}
                    disabled={isCheckout}
                    className='justify-center'
                >
                    checkout
                </Button>
            </div>
        </div>
    )
}
