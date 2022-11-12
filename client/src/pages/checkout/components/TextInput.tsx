import classnames from 'classnames'
import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

interface InputConfig {
    labelText: string
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & InputConfig

export const TextInput = (props: InputProps) => {
    const { register } = useFormContext()
    const { className, name, placeholder, type = 'text', labelText } = props

    return (
        <div className={classnames('flex flex-col', className)}>
            <label
                htmlFor={name}
                className='pb-[9px] text-[0.75rem] font-bold leading-[auto] -tracking-[0.21px]'
            >
                {labelText}
            </label>
            <input
                {...register(`${name}`)}
                placeholder={placeholder}
                type={type}
                name={name}
                id={name}
            />
        </div>
    )
}
