import { RefObject, useRef, useState } from 'react'
import { PortalFunctionParams } from 'react-portal'
import { useCartPosition } from '../hooks/useCartPosition'
import productTestImage from '../assets/product-xx59-headphones/desktop/image-product.jpg'
import { Counter } from './Counter'
import { Button } from './Button'

interface CartConfig {
    iconRef: RefObject<SVGSVGElement>
}

type CartProps = Pick<PortalFunctionParams, 'closePortal'> & CartConfig

export const Cart = (props: CartProps) => {
    const { closePortal, iconRef } = props

    const iconRect = iconRef.current?.getBoundingClientRect()
    const iconElementWidth = iconRef.current?.getBBox().width

    const modalRef = useRef<HTMLDivElement>(null)
    const modalWidth = modalRef.current?.offsetWidth

    const cartPosition = useCartPosition(iconRect)

    const [counter, setCounter] = useState(1)

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
                    <h6>cart (3)</h6>
                    <span className='inline-block text-black/50 underline'>
                        Remove all
                    </span>
                </div>
                <div className='flex items-center justify-between pb-8'>
                    <div className='flex gap-4'>
                        <div
                            style={{
                                backgroundImage: `url(${productTestImage})`,
                            }}
                            className='h-16 w-16 rounded-lg bg-cover bg-center bg-no-repeat'
                        ></div>
                        <div className='flex flex-col font-bold'>
                            <span className='uppercase'>xx59</span>
                            <span className='text-sm leading-[25px] tracking-normal text-black/50'>
                                $ 899
                            </span>
                        </div>
                    </div>
                    <Counter
                        counterType='small'
                        substraction={() =>
                            setCounter((prevCount) => (prevCount += 1))
                        }
                        counterValue={counter}
                        addition={() =>
                            setCounter((prevCount) => (prevCount -= 1))
                        }
                    />
                </div>
                <div className='flex justify-between pb-6'>
                    <span className='inline-block uppercase text-black/50'>
                        total
                    </span>
                    <h6>$ 5,396</h6>
                </div>
                <Button className='justify-center'>checkout</Button>
            </div>
        </div>
    )
}
