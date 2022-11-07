import { CategoryHeader, CategoryHero } from '../../components'
import xx99mark from '../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg'

export const Headphones = () => {
    return (
        <>
            <CategoryHeader headingText='headphones' />
            <CategoryHero
                imageUrl={xx99mark}
                heroHeading='XX99 Mark II Headphones'
                heroTextContent='The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.'
                productLink='/headphones'
                isNew
            />
        </>
    )
}
