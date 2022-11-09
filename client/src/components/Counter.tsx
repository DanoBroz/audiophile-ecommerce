import { CounterProps } from '../types'

export const Counter = (props: CounterProps) => {
    const { counterValue, addition, substraction } = props

    return (
        <div className='grid grid-cols-3 gap-5 bg-Blue-light p-[15px] [&>*]:w-[18px]'>
            <button
                onClick={addition}
                className='flex w-[18px] items-center justify-center text-black/50 hover:text-Orange-dark'
            >
                -
            </button>
            <span className='flex w-[18px] items-center justify-center'>
                {counterValue}
            </span>
            <button
                onClick={substraction}
                className='flex w-[18px] items-center justify-center text-black/50 hover:text-Orange-dark'
            >
                +
            </button>
        </div>
    )
}
