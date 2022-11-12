import { useNavigate } from 'react-router-dom'
import { CategoryHeader } from '../components'

export const Checkout = () => {
    const navigate = useNavigate()
    return (
        <>
            <CategoryHeader />
            <section className='container bg-Blue-light'>
                <span
                    className='mb-14 inline-block capitalize text-black/50 transition-colors hover:cursor-pointer hover:text-Orange-dark'
                    onClick={() => navigate(-1)}
                >
                    go back
                </span>
            </section>
        </>
    )
}
