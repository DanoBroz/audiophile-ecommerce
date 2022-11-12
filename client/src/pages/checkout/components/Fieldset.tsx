import classnames from 'classnames'
import type { HTMLAttributes } from 'react'

interface FieldsetConfig {
    heading?: string
}

type FieldsetProps = HTMLAttributes<HTMLFieldSetElement> & FieldsetConfig

export const Fieldset = (props: FieldsetProps) => {
    const { className, children, heading } = props

    return (
        <fieldset
            className={classnames(
                'grid grid-cols-2 gap-x-4 gap-y-6',
                className
            )}
        >
            {!!heading && (
                <legend className='sub-title pb-4 text-Orange-dark'>
                    {heading}
                </legend>
            )}
            {children}
        </fieldset>
    )
}
