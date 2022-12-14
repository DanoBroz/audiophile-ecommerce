import classnames from 'classnames'
import { ComponentPropsWithRef } from 'react'

enum ButtonType {
    'primary' = 0,
    'secondary' = 1,
    'outline' = 2,
}

interface ButtonConfig {
    buttontype?: keyof typeof ButtonType
}

type ButtonProps = ButtonConfig & ComponentPropsWithRef<'button'>

export const Button = (props: ButtonProps) => {
    const {
        className,
        buttontype = 'primary',
        children,
        ...elementProps
    } = props

    const primaryClass =
        'px-[30px] h-12 items-center bg-Orange-dark text-white hover:bg-Orange-light'
    const secondaryClass =
        'px-[30px] h-12 items-center bg-transparent text-black border border-black hover:bg-black hover:text-white'
    const outlineClass =
        'bg-transparent text-black/50 items-center gap-[13px] hover:text-Orange-dark'

    const buttonClasses = [primaryClass, secondaryClass, outlineClass]

    return (
        <button
            className={classnames(
                'flex text-[0.8125rem] font-bold uppercase tracking-[1px] transition-colors disabled:bg-gray-400',
                buttonClasses[ButtonType[buttontype]],
                className
            )}
            {...elementProps}
        >
            {children}
        </button>
    )
}
