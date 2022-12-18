import {
    About,
    Button,
    CategoryHeader,
    CategoryItems,
    Counter,
} from '../../components'

import { useNavigate, useParams } from 'react-router-dom'
import { usePageQuery } from '../../hooks'
import { ProductHero } from './components/ProductHero'
import { MouseEvent, useContext, useReducer } from 'react'
import { ProductDescription, ProductGallery, ProductOthers } from './components'
import { CartContext } from '../../context'
import { CartItem, ProductData } from '../../types'

export const DetailPage = () => {
    const { slug } = useParams()
    const navigate = useNavigate()
    const { cartItems, dispatch: cartDispatch } = useContext(CartContext)

    const productQueryData = usePageQuery(slug)
    const productData = productQueryData.data?.data.product

    const itemInCart = (productItem: ProductData) =>
        cartItems?.find((cartItem) => cartItem.id === productItem.id)

    const addProductItem = (e: MouseEvent, productItem: ProductData) => {
        e.preventDefault()
        if (!itemInCart(productItem)) {
            return cartDispatch({
                type: 'ADD_PRODUCT',
                payload: {
                    id: productItem.id,
                    name: productItem.name,
                    amount: state.counter,
                    image: productItem?.image.desktop,
                    pricePerItem: productItem?.price || 0,
                },
            })
        }
        return cartDispatch({
            type: 'CHANGE_PRODUCT',
            payload: {
                id: productItem.id,
                name: productItem.name,
                amount: state.counter,
                image: productItem?.image.desktop,
                pricePerItem: productItem?.price || 0,
            },
        })
    }

    const reducer = (
        state: { counter: number },
        action: { type: 'increment' | 'decrement' }
    ) => {
        switch (action.type) {
            case 'increment': {
                return {
                    counter:
                        state.counter < 10 ? state.counter + 1 : state.counter,
                }
            }
            case 'decrement': {
                return {
                    counter:
                        state.counter > 1 ? state.counter - 1 : state.counter,
                }
            }
        }
    }

    const [state, dispatch] = useReducer(reducer, {
        counter: (productData && itemInCart(productData)?.amount) || 1,
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
                                    counterValue={state.counter}
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
