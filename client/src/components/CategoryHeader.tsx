import classnames from 'classnames'
import type { HTMLAttributes } from 'react'

interface HeaderConfig {
    headingText?: string
}

type CategoryHeaderProps = HeaderConfig & HTMLAttributes<HTMLElement>

export const CategoryHeader = (props: CategoryHeaderProps) => {
    const { className, headingText, ...elementProps } = props

    return (
        <section
            className={classnames(
                'rounded-b-lg bg-black bg-contain bg-center bg-no-repeat text-center text-white',
                {
                    'mb-40 pt-[12.1875rem]': headingText,
                    'mb-[79px] pt-[97px]': !headingText,
                },
                className
            )}
            {...elementProps}
        >
            {!!headingText && <h2 className='pb-[97px]'>{headingText}</h2>}
        </section>
    )
}
