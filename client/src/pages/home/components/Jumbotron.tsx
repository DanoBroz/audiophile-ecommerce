import { Button } from '../../../components'
import heroBackground from '../../../assets/home/desktop/image-hero.jpg'
import { useNavigate } from 'react-router-dom'
import { useQueryClient } from '@tanstack/react-query'
import { getProductData } from '../../../hooks'

export const Jumbotron = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    return (
        <section
            style={{ backgroundImage: `url('${heroBackground}')` }}
            className='mb-40 rounded-b-lg bg-[#191919] bg-contain bg-center bg-no-repeat pt-[6.0625rem]'
        >
            <div className='container grid grid-cols-2'>
                <div className='max-w-[444.6px] pt-[128px] pb-[158px] pr-[46.6px] text-white'>
                    <span className='over-line inline-block pb-6 text-white/50'>
                        new product
                    </span>
                    <h1 className='pb-6'>XX99 Mark II Headphones</h1>
                    <p className='pb-10 pr-12 text-white/75'>
                        Experience natural, lifelike audio and exceptional build
                        quality made for the passionate music enthusiast.
                    </p>
                    <Button
                        onMouseEnter={() =>
                            queryClient.prefetchQuery(
                                ['products', 'xx99-mark-two-headphones'],
                                () => getProductData('xx99-mark-two-headphones')
                            )
                        }
                        onClick={() =>
                            navigate('/products/xx99-mark-two-headphones')
                        }
                    >
                        see product
                    </Button>
                </div>
            </div>
        </section>
    )
}
