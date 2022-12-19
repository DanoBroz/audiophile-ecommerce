import { useContext } from 'react'
import productTestImage from '../../../assets/product-xx59-headphones/desktop/image-product.jpg'
import { Button } from '../../../components'
import { CartContext } from '../../../context'

export const Summary = () => {
    const { cartState } = useContext(CartContext)
    const grandTotal = cartState.totalAmount + 50

    return (
        <div className='sticky top-5 self-start rounded-lg py-8 px-[33px]'>
            <h6 className='pb-[31px]'>summary</h6>
            {cartState.cartItems.map((cartItem) => (
                <div className='flex items-start justify-between pb-8'>
                    <div className='flex gap-4'>
                        <div
                            style={{
                                backgroundImage: `url(${cartItem.image})`,
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
                    <span className='text-black/50'>{cartItem.amount}x</span>
                </div>
            ))}
            <div className='flex justify-between pb-2'>
                <span className='inline-block uppercase text-black/50'>
                    total
                </span>
                <h6>$ {cartState.totalAmount.toLocaleString()}</h6>
            </div>
            <div className='flex justify-between pb-2'>
                <span className='inline-block uppercase text-black/50'>
                    shipping
                </span>
                <h6>$ 50</h6>
            </div>
            <div className='flex justify-between pb-6'>
                <span className='inline-block uppercase text-black/50'>
                    vat (included)
                </span>
                <h6>$ 1,079</h6>
            </div>
            <div className='flex justify-between pb-6'>
                <span className='inline-block uppercase text-black/50'>
                    grand total
                </span>
                <h6 className='text-Orange-dark'>
                    $ {grandTotal.toLocaleString()}
                </h6>
            </div>
            <Button className='w-full justify-center'>continue</Button>
        </div>
    )
}
