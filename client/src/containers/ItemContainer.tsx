import classnames from 'classnames'
import { HTMLAttributes } from 'react'

export const ItemContainer = (props: HTMLAttributes<HTMLElement>) => {
    const { className, children, ...elementProps } = props

    return (
        <section
            className={classnames(
                'container grid grid-cols-3 gap-[1.875rem]',
                className
            )}
            {...elementProps}
        >
            {children}
        </section>
    )
}
