import { RefObject, useRef } from 'react'
import { PortalFunctionParams } from 'react-portal'
import { useCartPosition } from '../hooks/useCartPosition'

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
                className={`absolute bg-white`}
            >
                This is more advanced Portal. It handles its own state.{' '}
                <button onClick={closePortal}>Close me!</button>, hit ESC or
                click outside of me.
            </div>
        </div>
    )
}
