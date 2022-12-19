import {
    About,
    Button,
    CategoryHeader,
    CategoryItems,
    Counter,
} from '../../components'

import { useNavigate, useParams } from 'react-router-dom'
import { useCart, useCounter, usePageQuery } from '../../hooks'
import { ProductHero } from './components/ProductHero'
import { useContext } from 'react'
import { ProductDescription, ProductGallery, ProductOthers } from './components'
import { CartContext } from '../../context'
import { ProductData } from '../../types'

export const DetailPage = () => {
    const { slug } = useParams()
    const navigate = useNavigate()
    const { cartState, dispatch: cartDispatch } = useContext(CartContext)

    const productQueryData = usePageQuery(slug)
    const productData = productQueryData.data?.data.product

    const itemInCart = (productItem: ProductData) =>
        cartState.cartItems?.find((cartItem) => cartItem.id === productItem.id)

    const {
        state: { counter },
        dispatch,
    } = useCounter({
        initialAmount: productData && itemInCart(productData)?.amount,
    })

    const { addProductItem } = useCart({
        cartDispatch,
        counter: counter,
        isItemInCart: (productData && !!itemInCart(productData)) || false,
    })

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
                                        dispatch({ type: 'decrement' })
                                    }
                                    counterValue={counter}
                                    addition={() =>
                                        dispatch({ type: 'increment' })
                                    }
                                />
                                <Button
                                    disabled={!productData}
                                    onClick={(e) =>
                                        productData &&
                                        addProductItem(e, productData)
                                    }
                                >
                                    {productData &&
                                    itemInCart(productData)?.amount
                                        ? 'change in cart'
                                        : 'add to cart'}
                                </Button>
                            </div>
                        </ProductHero>
                        <ProductDescription
                            description={productData?.description}
                            includes={productData?.includes}
                        />
                        <ProductGallery gallery={productData?.gallery} />
                        <ProductOthers others={productData?.others} />
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
