import {
    About,
    CategoryHeader,
    CategoryHero,
    CategoryItems,
} from '../components'

import xx99markTwo from '../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg'
import xx99markOne from '../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg'
import xx59 from '../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg'

export const Headphones = () => {
    return (
        <>
            <CategoryHeader headingText='headphones' />
            <CategoryHero
                imageUrl={xx99markTwo}
                heroHeading='XX99 Mark II Headphones'
                heroTextContent='The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.'
                productLink='/products/xx99-mark-two-headphones'
                isNew
            />
            <CategoryHero
                imageUrl={xx99markOne}
                revert
                heroHeading='XX99 Mark I Headphones'
                heroTextContent='As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.'
                productLink='/products/xx99-mark-one-headphones'
            />
            <CategoryHero
                imageUrl={xx59}
                heroHeading='XX59 Headphones'
                heroTextContent='Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.'
                productLink='/products/xx59-headphones'
            />
            <CategoryItems className='pb-40' />
            <About className='pb-40' />
        </>
    )
}
