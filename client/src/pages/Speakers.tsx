import {
    About,
    CategoryHeader,
    CategoryHero,
    CategoryItems,
} from '../components'

import zx9 from '../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg'
import zx7 from '../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg'

export const Speakers = () => {
    return (
        <>
            <CategoryHeader headingText='speakers' />
            <CategoryHero
                imageUrl={zx9}
                heroHeading='ZX9 SPEAKER'
                heroTextContent='Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.'
                productLink='/speakers'
                isNew
            />
            <CategoryHero
                imageUrl={zx7}
                revert
                heroHeading='ZX7 SPEAKER'
                heroTextContent='Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.'
                productLink='/speakers'
            />
            <CategoryItems className='pb-40' />
            <About className='pb-40' />
        </>
    )
}
