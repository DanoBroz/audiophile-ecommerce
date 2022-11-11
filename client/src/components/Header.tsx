import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/shared/desktop/logo.svg'
import { ReactComponent as CartIcon } from '../assets/shared/desktop/icon-cart.svg'
import { NavLinks } from './NavLinks'
import { Cart } from './Cart'
import { PortalWithState } from 'react-portal'

export const Header = () => {
    return (
        <header className='absolute top-0 left-0 right-0'>
            <div className='container flex justify-between border-b border-white/20 pt-8 pb-9'>
                <Link to='/'>
                    <Logo />
                </Link>
                <NavLinks className='lg:pr-[11%]' />
                <PortalWithState
                    closeOnOutsideClick
                    closeOnEsc
                    defaultOpen
                >
                    {({ openPortal, closePortal, isOpen, portal }) => {
                        isOpen
                            ? document.body.classList.add('relative')
                            : document.body.classList.remove('relative')
                        return (
                            <>
                                <CartIcon
                                    onClick={openPortal}
                                    className='hover:cursor-pointer'
                                />
                                {portal(
                                    <div
                                        className='absolute inset-0 flex items-center justify-center bg-black/20'
                                        onClick={closePortal}
                                    >
                                        <div className='container'>
                                            <div
                                                onClick={(e) =>
                                                    e.stopPropagation()
                                                }
                                                className='absolute bg-white'
                                            >
                                                This is more advanced Portal. It
                                                handles its own state.{' '}
                                                <button onClick={closePortal}>
                                                    Close me!
                                                </button>
                                                , hit ESC or click outside of
                                                me.
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </>
                        )
                    }}
                </PortalWithState>
            </div>
        </header>
    )
}
