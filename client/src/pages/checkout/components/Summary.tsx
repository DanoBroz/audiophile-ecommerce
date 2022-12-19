import { useContext } from 'react'
import { Button } from '../../../components'
import { CartContext } from '../../../context'
import { SummaryLine } from './SummaryLine'

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
            <SummaryLine
                summaryLable='total'
                amount={cartState.totalAmount}
            />
            <SummaryLine
                summaryLable='shipping'
                amount={50}
            />
            <SummaryLine
                summaryLable='vat (included)'
                amount={1079}
            />
            <SummaryLine
                summaryLable='grand total'
                amount={grandTotal}
            />
            <Button className='w-full justify-center'>continue</Button>
        </div>
    )
}
