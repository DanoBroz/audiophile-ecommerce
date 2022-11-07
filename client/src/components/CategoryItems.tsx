import { ItemContainer } from '../containers'
import { CategoryItem } from './CategoryItem'

import headphonesImage from '../assets/shared/desktop/image-category-thumbnail-headphones.png'
import speakersImage from '../assets/shared/desktop/image-category-thumbnail-speakers.png'
import earphonesImage from '../assets/shared/desktop/image-category-thumbnail-earphones.png'
import { HTMLAttributes } from 'react'

type CategoryItemsProps = HTMLAttributes<HTMLElement>

export const CategoryItems = (props: CategoryItemsProps) => {
    return (
        <ItemContainer {...props}>
            <CategoryItem
                categoryTitle='headphones'
                imageUrl={headphonesImage}
            />
            <CategoryItem
                categoryTitle='speakers'
                imageUrl={speakersImage}
            />
            <CategoryItem
                categoryTitle='earphones'
                imageUrl={earphonesImage}
            />
        </ItemContainer>
    )
}
