import { HTMLAttributes } from 'react'
import { Link } from 'react-router-dom'

export const NavLinks = ({
    className,
    ...elementProps
}: HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={`flex gap-[2.125rem] text-[0.8125rem] uppercase leading-[1.5625rem] tracking-[0.125rem] text-white ${className}`}
            {...elementProps}
        >
            <Link
                className='transition-colors hover:text-Orange-dark'
                to='/'
            >
                home
            </Link>
            <Link
                className='transition-colors hover:text-Orange-dark'
                to='/headphones'
            >
                headphones
            </Link>
            <Link
                className='transition-colors hover:text-Orange-dark'
                to='/speakers'
            >
                speakers
            </Link>
            <Link
                className='transition-colors hover:text-Orange-dark'
                to='/earphones'
            >
                earphones
            </Link>
        </div>
    )
}
