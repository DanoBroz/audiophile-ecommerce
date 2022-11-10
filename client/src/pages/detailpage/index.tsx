import {
    About,
    Button,
    CategoryHeader,
    CategoryItems,
    Counter,
} from '../../components'

import { useNavigate, useParams } from 'react-router-dom'
import { usePageQuery } from '../../hooks/usePageQuery'
import { ProductHero } from './components/ProductHero'
import { useState } from 'react'
import { ProductDescription } from './components'

export const DetailPage = () => {
    const { slug } = useParams()
    const navigate = useNavigate()

    const productQueryData = usePageQuery(slug)
    const productData = productQueryData.data?.data.product
    const [counter, setCounter] = useState(1)

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
                        >
                            <h6 className='pb-[47px]'>
                                $ {productData?.price}
                            </h6>
                            <div className='flex gap-4'>
                                <Counter
                                    substraction={() =>
                                        setCounter(
                                            (prevCount) => (prevCount += 1)
                                        )
                                    }
                                    counterValue={counter}
                                    addition={() =>
                                        setCounter(
                                            (prevCount) => (prevCount -= 1)
                                        )
                                    }
                                />
                                <Button>add to cart</Button>
                            </div>
                        </ProductHero>
                        <ProductDescription
                            description={productData?.description}
                            includes={productData?.includes}
                        />
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
