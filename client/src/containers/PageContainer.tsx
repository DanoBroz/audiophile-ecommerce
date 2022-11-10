import { useLayoutEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer, Header } from '../components'

export const PageContainer = () => {
    const location = useLocation()

    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0)
    }, [location.pathname])

    return (
        <div className='relative'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
