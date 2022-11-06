import { CategoryItem } from '../components'
import { ItemContainer } from '../containers'
import { Jumbotron } from './components'
import headphonesImage from '../assets/shared/desktop/image-category-thumbnail-headphones.png'
import speakersImage from '../assets/shared/desktop/image-category-thumbnail-speakers.png'
import earphonesImage from '../assets/shared/desktop/image-category-thumbnail-earphones.png'

export const Home = () => {
    return (
        <>
            <Jumbotron />
            <ItemContainer>
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
        </>
    )
}
