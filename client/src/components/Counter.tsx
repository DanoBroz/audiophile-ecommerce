import classnames from 'classnames'
import { CounterProps } from '../types'

export const Counter = (props: CounterProps) => {
    const {
        counterValue,
        addition,
        substraction,
        counterType = 'normal',
    } = props

    return (
        <div
            className={classnames(
                'grid grid-cols-3 gap-5 bg-Blue-light px-[15px] py-[11px] [&>*]:w-[18px]',
                {
                    'gap-5 p-[15px] [&>*]:w-[18px]': counterType === 'normal',
                    'gap-3 px-[11.5px] py-[7px] [&>*]:w-[16px]':
                        counterType === 'small',
                }
            )}
        >
            <button
                onClick={substraction}
                className='flex items-center justify-center text-black/50 hover:text-Orange-dark'
            >
                -
            </button>
            <span className='flex items-center justify-center'>
                {counterValue}
            </span>
            <button
                onClick={addition}
                className='flex items-center justify-center text-black/50 hover:text-Orange-dark'
            >
                +
            </button>
        </div>
    )
}
