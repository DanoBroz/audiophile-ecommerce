import { About, CategoryHeader, CategoryItems } from '../../components'
import { useNavigate, useParams } from 'react-router-dom'
import { usePageQuery } from '../../hooks/usePageQuery'
import { ProductHero } from './components/ProductHero'

export const DetailPage = () => {
    const { slug } = useParams()
    const navigate = useNavigate()

    const productQueryData = usePageQuery(slug)

    const productData = productQueryData.data?.data.product

    return (
        <>
            <CategoryHeader />
            <section className='container'>
                <span
                    className='mb-14 inline-block capitalize text-black/50 transition-colors hover:cursor-pointer hover:text-Orange-dark'
                    onClick={() => navigate(-1)}
                >
                    go back
                </span>
                {!productQueryData.isLoading ? (
                    <>
                        <ProductHero
                            isNew={productData?.new}
                            heroHeading={productData?.name}
                            heroTextContent={productData?.description}
                            imageUrl={productData?.image.desktop}
                        ></ProductHero>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </section>
            <CategoryItems className='pb-40' />
            <About className='pb-40' />
        </>
    )
}
