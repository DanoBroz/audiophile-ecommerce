import { Outlet } from 'react-router-dom'
import { Header } from '../components'

export const PageContainer = () => {
    return (
        <div className='relative'>
            <Header />
            <Outlet />
            <footer>footer here</footer>
        </div>
    )
}
