import { HTMLAttributes } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from './Button'
import { ReactComponent as ArrowIcon } from '../assets/shared/desktop/icon-arrow-right.svg'

interface CategoryConfig {
    imageUrl: string
    categoryTitle: string
}

type CategoryProps = HTMLAttributes<HTMLDivElement> & CategoryConfig

export const CategoryItem = (props: CategoryProps) => {
    const { imageUrl, categoryTitle, className, ...elementProps } = props

    const navigate = useNavigate()

    return (
        <div
            className='relative grid justify-center text-center hover:cursor-pointer [&:hover>button]:text-Orange-dark'
            onClick={() => navigate(`/${categoryTitle}`)}
            {...elementProps}
        >
            <div className='absolute inset-0 top-[80px] -z-[1] bg-Blue-light'></div>
            <img
                src={imageUrl}
                alt='category-item'
                className='h-[160px]'
            />
            <h6 className='pb-[15px]'>{categoryTitle}</h6>
            <Button
                className='mx-auto mb-[30px]'
                buttontype='outline'
            >
                <span>shop</span>
                <ArrowIcon />
            </Button>
        </div>
    )
}
