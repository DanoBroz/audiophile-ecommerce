import { ProductData } from '../../../types'

type GalleryProps = Partial<Pick<ProductData, 'gallery'>>

export const ProductGallery = ({ gallery }: GalleryProps) => {
    return (
        <div
            className='mb-40 grid gap-x-[30px] gap-y-8'
            style={{
                gridTemplateColumns: '1.3fr 2fr',
                gridTemplateRows: 'repeat(2, 280px)',
                gridTemplateAreas: `'image1 image3' 'image2 image3'`,
            }}
        >
            <div
                className='rounded-lg bg-cover bg-center bg-no-repeat'
                style={{
                    gridArea: 'image1',
                    backgroundImage: `url('../${gallery?.first.desktop}')`,
                }}
            ></div>
            <div
                className='rounded-lg bg-cover bg-center bg-no-repeat'
                style={{
                    gridArea: 'image2',
                    backgroundImage: `url('../${gallery?.second.desktop}')`,
                }}
            ></div>
            <div
                className='rounded-lg bg-cover bg-center bg-no-repeat'
                style={{
                    gridArea: 'image3',
                    backgroundImage: `url('../${gallery?.third.desktop}')`,
                }}
            ></div>
        </div>
    )
}
