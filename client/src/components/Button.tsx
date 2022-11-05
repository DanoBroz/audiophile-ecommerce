import classnames from 'classnames'
import { HTMLAttributes } from 'react'

enum ButtonType {
    'primary' = 0,
    'seconday' = 1,
    'outline' = 2,
}

interface ButtonConfig {
    type?: keyof typeof ButtonType
}

type ButtonProps = ButtonConfig & HTMLAttributes<HTMLButtonElement>

export const Button = (props: ButtonProps) => {
    const { className, type = 'primary', children, ...elementProps } = props

    const primaryClass =
        'px-[30px] h-12 items-center bg-Orange-dark text-white hover:bg-Orange-light'
    const secondaryClass =
        'px-[30px] h-12 items-center bg-white text-black border border-black hover:bg-black hover:text-white'
    const outlineClass =
        'bg-white text-black border border-black hover:bg-Orange-light'
    const buttonClasses = [primaryClass, secondaryClass, outlineClass]

    return (
        <button
            className={classnames(
                'flex text-[0.8125rem] font-bold uppercase tracking-[1px] transition-colors',
                buttonClasses[ButtonType[type]],
                className
            )}
            {...elementProps}
        >
            {children}
        </button>
    )
}
