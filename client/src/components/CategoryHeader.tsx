import type { HTMLAttributes } from 'react'

interface HeaderConfig {
    headingText: string
}

type CategoryHeaderProps = HeaderConfig & HTMLAttributes<HTMLElement>

export const CategoryHeader = (props: CategoryHeaderProps) => {
    const { className, headingText, ...elementProps } = props

    return (
        <section
            className={`mb-40 rounded-b-lg bg-black bg-contain bg-center bg-no-repeat pt-[12.1875rem] text-center text-white ${className}`}
            {...elementProps}
        >
            <h2 className='pb-[97px]'>{headingText}</h2>
        </section>
    )
}
