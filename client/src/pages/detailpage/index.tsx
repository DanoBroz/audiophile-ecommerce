import { CategoryHeader } from '../../components'
import { useNavigate, useParams } from 'react-router-dom'

export const DetailPage = () => {
    const { slug } = useParams()
    const navigate = useNavigate()

    return (
        <>
            <CategoryHeader />
            <div className='container'>
                <span
                    className='mb-14 inline-block capitalize text-black/50 transition-colors hover:cursor-pointer hover:text-Orange-dark'
                    onClick={() => navigate(-1)}
                >
                    go back
                </span>
            </div>
        </>
    )
}
