import classnames from 'classnames'
import { ProductHeroProps } from '../../../types/components/Hero'

export const ProductHero = (props: ProductHeroProps) => {
    const {
        className,
        imageUrl,
        heroHeading,
        heroTextContent,
        isNew,
        children,
        ...elementProps
    } = props
    return (
        <section
            className={classnames(
                'container grid items-center gap-[125px] pb-40',
                className
            )}
            style={{
                gridTemplateColumns: '540px auto',
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
                {children}
            </div>
        </section>
    )
}
