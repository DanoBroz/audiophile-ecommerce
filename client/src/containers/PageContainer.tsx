import { Outlet } from 'react-router-dom'
import { Header } from '../components'
import type { PageContainerProps } from '../types'

export const PageContainer = ({ hasBlackBg }: PageContainerProps) => {
    return (
        <div>
            <Header hasBlackBg={hasBlackBg} />
            <Outlet />
            <footer></footer>
        </div>
    )
}
