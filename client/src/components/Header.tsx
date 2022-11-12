import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/shared/desktop/logo.svg'
import { NavLinks } from './NavLinks'
import { CartWrapper } from './CartWrapper'

export const Header = () => {
    return (
        <header className='absolute top-0 left-0 right-0'>
            <div className='container flex justify-between border-b border-white/20 pt-8 pb-9'>
                <Link to='/'>
                    <Logo />
                </Link>
                <NavLinks className='lg:pr-[11%]' />
                <CartWrapper />
            </div>
        </header>
    )
}
