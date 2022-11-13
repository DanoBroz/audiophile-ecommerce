import { useNavigate } from 'react-router-dom'
import { CategoryHeader } from '../../components'
import { Content, Summary } from './components'

export const Checkout = () => {
    const navigate = useNavigate()

    return (
        <>
            <CategoryHeader />
            <section className='container bg-Blue-light'>
                <span
                    className='mb-[38px] inline-block capitalize text-black/50 transition-colors hover:cursor-pointer hover:text-Orange-dark'
                    onClick={() => navigate(-1)}
                >
                    go back
                </span>
                <main className='grid grid-cols-[minmax(730px,_2fr)_minmax(350px,_1fr)] justify-start gap-[30px] pb-[141px] [&>*]:bg-white'>
                    <div className='rounded-lg px-12 pt-[54px] pb-12'>
                        <h3 className='pb-[41px]'>Checkout</h3>
                        <Content />
                    </div>
                    <Summary />
                </main>
            </section>
        </>
    )
}
