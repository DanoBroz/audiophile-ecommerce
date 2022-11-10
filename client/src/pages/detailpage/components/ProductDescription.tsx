import { ProductData } from '../../../types'

type DescriptionProps = Partial<Pick<ProductData, 'description' | 'includes'>>

export const ProductDescription = ({
    description,
    includes,
}: DescriptionProps) => {
    return (
        <div
            className='grid gap-[125px] pb-40'
            style={{ gridTemplateColumns: '635px auto' }}
        >
            <div>
                <h3 className='pb-8'>features</h3>
                <p className='text-black/50'>{description}</p>
            </div>
            <div>
                <h3 className='pb-8'>in the box</h3>
                <ul>
                    {includes?.map((includeItem) => (
                        <li
                            className='flex gap-6'
                            key={includeItem._id}
                        >
                            <span className='inline-block text-Orange-dark'>
                                {`${String(includeItem.quantity)}x`}
                            </span>
                            <span className='inline-block text-black/50'>
                                {includeItem.item}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
