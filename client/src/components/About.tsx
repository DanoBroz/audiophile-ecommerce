import type { HTMLAttributes } from 'react'
import aboutPicture from '../assets/shared/desktop/image-best-gear.jpg'

export const About = ({
    className,
    ...elementProps
}: HTMLAttributes<HTMLElement>) => {
    return (
        <section
            className={`container grid grid-cols-2 items-center gap-[125px] ${className}`}
            {...elementProps}
        >
            <div>
                <h2 className='pb-8'>
                    Bringing you the{' '}
                    <span className='text-Orange-dark'>best</span> audio gear
                </h2>
                <p className='text-black/50'>
                    Located at the heart of New York City, Audiophile is the
                    premier store for high end headphones, earphones, speakers,
                    and audio accessories. We have a large showroom and luxury
                    demonstration rooms available for you to browse and
                    experience a wide range of our products. Stop by our store
                    to meet some of the fantastic people who make Audiophile the
                    best place to buy your portable audio equipment.
                </p>
            </div>
            <img
                className='rounded-xl'
                src={aboutPicture}
                alt='man with headphones'
            />
        </section>
    )
}
