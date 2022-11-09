import { About, CategoryHeader, CategoryItems } from '../../components'
import { useNavigate, useParams } from 'react-router-dom'
import { usePageQuery } from '../../hooks/usePageQuery'

export const DetailPage = () => {
    const { slug } = useParams()
    const navigate = useNavigate()

    const productData = usePageQuery(slug)

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
                {!productData.isLoading && <div className='grid '></div>}
            </section>
            <CategoryItems className='pb-40' />
            <About className='pb-40' />
        </>
    )
}
