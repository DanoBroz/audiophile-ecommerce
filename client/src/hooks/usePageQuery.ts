import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { ProductDataResponse } from '../types'

export const getProductData = async (
    productSlug?: string
): Promise<ProductDataResponse> => {
    const { data } = await axios.get(`/api/v1/products/${productSlug}`)
    return await data
}

export const usePageQuery = (productSlug?: string) => {
    const productQuery = useQuery<ProductDataResponse>(
        ['products', productSlug],
        () => getProductData(productSlug)
    )

    return productQuery
}
