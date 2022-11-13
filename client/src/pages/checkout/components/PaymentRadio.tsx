import { useFormContext } from 'react-hook-form'

export const PaymentRadio = () => {
    const { register } = useFormContext()

    return (
        <>
            <label className='pb-[9px] text-[0.75rem] font-bold leading-[auto] -tracking-[0.21px]'>
                Payment Method
            </label>
            <div className='grid gap-y-4'>
                <label
                    htmlFor='emoney'
                    className='flex cursor-pointer items-center gap-4 rounded-lg border border-[#CFCFCF] px-4 py-[18px]'
                >
                    <input
                        {...register('payment')}
                        name='payment'
                        type='radio'
                        value='emoney'
                        id='emoney'
                        className='border-[#cfcfcf] checked:border-[#CFCFCF] checked:text-Orange-dark focus:ring-0'
                    />
                    e-Money
                </label>
                <label
                    htmlFor='cash'
                    className='flex cursor-pointer items-center gap-4 rounded-lg border border-[#CFCFCF] px-4 py-[18px]'
                >
                    <input
                        {...register('payment')}
                        type='radio'
                        name='payment'
                        id='cash'
                        value='cash'
                        className='border-[#cfcfcf] checked:border-[#CFCFCF] checked:text-Orange-dark focus:ring-0'
                    />
                    Cash on Delivery
                </label>
            </div>
        </>
    )
}
