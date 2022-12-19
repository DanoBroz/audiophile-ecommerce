import { RefObject, useRef, MouseEvent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useCartPosition } from './useCartPosition'

interface CartUIProps {
    iconRef: RefObject<SVGSVGElement>
    closePortal: () => void
}

export const useCartUI = (props: CartUIProps) => {
    const { iconRef, closePortal } = props

    const navigate = useNavigate()
    const location = useLocation()

    const isCheckout = location.pathname.split('/')[1] === 'checkout'

    const iconRect = iconRef.current?.getBoundingClientRect()
    const iconElementWidth = iconRef.current?.getBBox().width

    const modalRef = useRef<HTMLDivElement>(null)
    const modalWidth = modalRef.current?.offsetWidth

    const cartPosition = useCartPosition(iconRect)

    const navigateToCheckout = (e: MouseEvent<HTMLButtonElement>) => {
        navigate('/checkout')
        closePortal()
    }

    return {
        navigateToCheckout,
        cartPosition,
        modalWidth,
        iconElementWidth,
        isCheckout,
        modalRef,
    }
}
