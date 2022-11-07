import classnames from 'classnames'
import { HTMLAttributes } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from './Button'

interface HeroConfig {
    heroHeading: string
    heroTextContent: string
    productLink: string
    imageUrl: string
    isNew?: boolean
    invert?: boolean
}

type CategoryHeroProps = HeroConfig & HTMLAttributes<HTMLDivElement>

export const CategoryHero = (props: CategoryHeroProps) => {
    const {
        className,
        heroTextContent,
        invert,
        isNew,
        imageUrl,
        heroHeading,
        productLink,
        ...elementProps
    } = props

    const navigate = useNavigate()

    return (
        <section
            className={classnames(
                'container grid items-center gap-[125px] pb-40',
                {
                    'grid-flow-row-dense': invert,
                },
                className
            )}
            style={{ gridTemplateColumns: '540px auto' }}
            {...elementProps}
        >
            <div
                style={{ backgroundImage: `url('${imageUrl}')` }}
                className='h-[560px] w-[540px] overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat'
            ></div>
            <div>
                {isNew && (
                    <span className='over-line inline-block pb-4 text-Orange-dark'>
                        new product
                    </span>
                )}
                <h2 className='pb-8'>{heroHeading}</h2>
                <p className='pb-10 text-black/50'>{heroTextContent}</p>
                <Button onClick={() => navigate(productLink)}>
                    see product
                </Button>
            </div>
        </section>
    )
}
