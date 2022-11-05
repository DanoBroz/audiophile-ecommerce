import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/shared/desktop/logo.svg'
import { ReactComponent as CartIcon } from '../assets/shared/desktop/icon-cart.svg'
import type { HeaderProps } from '../types'

export const Header = ({ hasBlackBg = false }: HeaderProps) => {
    return (
        <header className={`${hasBlackBg ? 'bg-Black-dark' : ''}`}>
            <div className='container flex justify-between border-b border-white/20 pt-8 pb-9'>
                <Logo />
                <div className='flex gap-[2.125rem] text-[0.8125rem] uppercase leading-[1.5625rem] tracking-[0.125rem] text-white'>
                    <Link
                        className='transition-colors hover:text-white/80'
                        to='/home'
                    >
                        home
                    </Link>
                    <Link
                        className='transition-colors hover:text-white/80'
                        to='/headphones'
                    >
                        headphones
                    </Link>
                    <Link
                        className='transition-colors hover:text-white/80'
                        to='/speakers'
                    >
                        speakers
                    </Link>
                    <Link
                        className='transition-colors hover:text-white/80'
                        to='/earphones'
                    >
                        earphone
                    </Link>
                </div>
                <CartIcon />
            </div>
        </header>
    )
}
