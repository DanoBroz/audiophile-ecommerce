import { useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../../components'
import { ProductData } from '../../../types'

type OthersProps = Partial<Pick<ProductData, 'others'>>

export const ProductOthers = ({ others }: OthersProps) => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    return (
        <div className='mb-40'>
            <h3 className='pb-16 text-center'>you may also like</h3>
            <div className='grid grid-cols-3 gap-[30px]'>
                {others?.map((otherItem, index) => (
                    <div
                        key={otherItem._id}
                        className='flex flex-col items-center'
                    >
                        <img
                            src={`../${otherItem.image.desktop}`}
                            className='mb-10 rounded-lg'
                            alt={`product ${index + 1}`}
                        />
                        <h5 className='pb-8'>{otherItem.name}</h5>
                        <Button
                            onMouseEnter={() =>
                                queryClient.prefetchQuery([
                                    'products',
                                    otherItem.slug,
                                ])
                            }
                            onClick={() =>
                                navigate(`/products/${otherItem.slug}`)
                            }
                        >
                            see product
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    )
}
