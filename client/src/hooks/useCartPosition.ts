import debounce from 'lodash.debounce'
import { useEffect, useState } from 'react'

interface PositionType {
    x: number | undefined
    y: number | undefined
}

export const useCartPosition = (iconRect: DOMRect | undefined) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [cartPosition, setCartPosition] = useState<PositionType>({
        x: 0,
        y: 0,
    })

    useEffect(() => {
        setCartPosition({ x: iconRect?.x, y: iconRect?.y })
    }, [iconRect?.y, iconRect?.x, windowWidth])

    useEffect(() => {
        const getDelayedWindow = debounce(() => {
            setWindowWidth(window.innerWidth)
        }, 1000)

        window.addEventListener('resize', () => getDelayedWindow())

        return () =>
            window.removeEventListener('resize', () => getDelayedWindow())
    })

    return cartPosition
}
