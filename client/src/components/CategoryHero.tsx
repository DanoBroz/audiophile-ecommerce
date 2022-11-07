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
    revert?: boolean
}

type CategoryHeroProps = HeroConfig & HTMLAttributes<HTMLDivElement>

export const CategoryHero = (props: CategoryHeroProps) => {
    const {
        className,
        heroTextContent,
        revert = false,
        isNew,
        imageUrl,
        heroHeading,
        productLink,
        ...elementProps
    } = props

    const navigate = useNavigate()
    const revertAreas = revert ? `'content photo'` : `'photo content'`

    return (
        <section
            className={classnames(
                'container grid items-center gap-[125px] pb-40',
                className
            )}
            style={{
                gridTemplateColumns: `${revert ? 'auto 540px' : '540px auto'}`,
                gridTemplateAreas: revertAreas,
            }}
            {...elementProps}
        >
            <div
                style={{
                    backgroundImage: `url('${imageUrl}')`,
                    gridArea: 'photo',
                }}
                className='h-[560px] w-[540px] overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat'
            ></div>
            <div style={{ gridArea: 'content' }}>
                {isNew && (
                    <span className='over-line inline-block pb-4 text-Orange-dark'>
                        new product
                    </span>
                )}
                <h2 className='pb-8 pr-[140px]'>{heroHeading}</h2>
                <p className='pb-10 text-black/50'>{heroTextContent}</p>
                <Button onClick={() => navigate(productLink)}>
                    see product
                </Button>
            </div>
        </section>
    )
}
