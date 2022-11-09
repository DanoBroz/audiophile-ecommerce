import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const getProductData = async (productSlug?: string) => {
    const { data } = await axios.get(`/api/v1/products/${productSlug}`)
    return await data
}

export const usePageQuery = (productSlug?: string) => {
    const productQuery = useQuery(['products', productSlug], () =>
        getProductData(productSlug)
    )

    return productQuery
}
