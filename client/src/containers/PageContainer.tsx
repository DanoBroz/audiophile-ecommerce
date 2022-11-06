import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../components'

export const PageContainer = () => {
    return (
        <div className='relative'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
