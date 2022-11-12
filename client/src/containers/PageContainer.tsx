import { useLayoutEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer, Header } from '../components'

interface BgProps {
    hasBlueBackground?: boolean
}

export const PageContainer = ({ hasBlueBackground = false }: BgProps) => {
    const location = useLocation()

    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0)
    }, [location.pathname])

    return (
        <div className={`relative ${hasBlueBackground ? 'bg-Blue-light' : ''}`}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
