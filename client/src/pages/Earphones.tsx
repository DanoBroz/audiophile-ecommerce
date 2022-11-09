import {
    About,
    CategoryHeader,
    CategoryHero,
    CategoryItems,
} from '../components'

import yx1 from '../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg'

export const Earphones = () => {
    return (
        <>
            <CategoryHeader headingText='earphones' />
            <CategoryHero
                imageUrl={yx1}
                heroHeading='YX1 WIRELESS EARPHONES'
                heroTextContent='Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.'
                productLink='/earphones'
                isNew
            />
            <CategoryItems className='pb-40' />
            <About className='pb-40' />
        </>
    )
}
