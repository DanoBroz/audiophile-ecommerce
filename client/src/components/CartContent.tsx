import type { ContextConfig } from '../types'
import { Counter } from './Counter'

export const CartContent = (props: ContextConfig) => {
    const {
        cartState: { cartItems },
        dispatch,
    } = props

    return cartItems?.length ? (
        <>
            {cartItems.map((cartItem) => (
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
                        substraction={() =>
                            dispatch({
                                type:
                                    cartItem.amount <= 1
                                        ? 'DELETE_PRODUCT'
                                        : 'REDUCE_AMOUNT',
                                payload: cartItem,
                            })
                        }
                        counterValue={cartItem.amount}
                        addition={() =>
                            cartItem.amount < 10 &&
                            dispatch({
                                type: 'ADD_AMOUNT',
                                payload: cartItem,
                            })
                        }
                    />
                </div>
            ))}
        </>
    ) : (
        <p className='pb-4'>Your cart is empty</p>
    )
}
