import { ReactComponent as Logo } from '../assets/shared/desktop/logo.svg'
import { ReactComponent as FacebookIcon } from '../assets/shared/desktop/icon-facebook.svg'
import { ReactComponent as TwitterIcon } from '../assets/shared/desktop/icon-twitter.svg'
import { ReactComponent as InstagramIcon } from '../assets/shared/desktop/icon-instagram.svg'
import { NavLinks } from './NavLinks'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <footer className='bg-Black-light'>
            <div className='container'>
                <div className='mb-[71px] h-1 w-[101px] bg-Orange-dark'></div>
                <div className='footer-content-areas grid justify-between gap-y-9 pb-12'>
                    <Link
                        className='transition-colors hover:text-Orange-dark'
                        to='/'
                        style={{ gridArea: 'logo' }}
                    >
                        <Logo />
                    </Link>
                    <NavLinks
                        className='justify-end'
                        style={{ gridArea: 'links' }}
                    />
                    <p
                        className='text-white/50'
                        style={{ gridArea: 'text' }}
                    >
                        Audiophile is an all in one stop to fulfill your audio
                        needs. We're a small team of music lovers and sound
                        specialists who are devoted to helping you get the most
                        out of personal audio. Come and visit our demo facility
                        - we’re open 7 days a week.
                    </p>
                    <div
                        className='flex items-end justify-end gap-4 [&>:hover]:cursor-pointer'
                        style={{ gridArea: 'social' }}
                    >
                        <FacebookIcon className='transition-colors hover:[&>]:fill-Orange-dark' />
                        <TwitterIcon className='transition-colors hover:[&>]:fill-Orange-dark' />
                        <InstagramIcon className='transition-colors hover:[&>]:fill-Orange-dark' />
                    </div>
                    <p
                        className='font-bold text-white/50 lg:pt-[20px]'
                        style={{ gridArea: 'copy' }}
                    >
                        Copyright 2022. All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}
