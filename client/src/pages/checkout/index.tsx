import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { CategoryHeader } from '../../components'
import { Fieldset, TextInput } from './components'

export const Checkout = () => {
    const navigate = useNavigate()

    const methods = useForm()
    const { register, handleSubmit } = methods

    return (
        <>
            <CategoryHeader />
            <section className='container bg-Blue-light'>
                <span
                    className='mb-[38px] inline-block capitalize text-black/50 transition-colors hover:cursor-pointer hover:text-Orange-dark'
                    onClick={() => navigate(-1)}
                >
                    go back
                </span>
                <main className='grid grid-cols-[minmax(730px,_2fr)_minmax(350px,_1fr)] justify-start gap-[30px] pb-[141px] [&>*]:bg-white'>
                    <div className='rounded-lg px-12 pt-[54px] pb-12'>
                        <h3 className='pb-[41px]'>Checkout</h3>
                        <FormProvider {...methods}>
                            <form
                                className='grid gap-[53px]'
                                onSubmit={handleSubmit((data) =>
                                    console.log(data)
                                )}
                            >
                                <Fieldset heading='billing details'>
                                    <TextInput
                                        labelText='Name'
                                        name='name'
                                        placeholder='Alexei Ward'
                                    />
                                    <TextInput
                                        labelText='Email Address'
                                        name='email'
                                        type='email'
                                        placeholder='alexei@mail.com'
                                    />
                                    <TextInput
                                        labelText='Phone Number'
                                        name='phone'
                                        placeholder='+1 202-555-0136'
                                        type='tel'
                                    />
                                </Fieldset>
                                <Fieldset heading='shipping details'>
                                    <TextInput
                                        className='col-span-2'
                                        labelText='Address'
                                        name='address'
                                        placeholder='1137 Williams Avenue'
                                    />
                                    <TextInput
                                        labelText='Zip Code'
                                        name='zipcode'
                                        placeholder='10001'
                                    />
                                    <TextInput
                                        labelText='City'
                                        name='city'
                                        placeholder='New York'
                                    />
                                    <TextInput
                                        labelText='Country'
                                        name='country'
                                        placeholder='United States'
                                    />
                                </Fieldset>
                                <Fieldset heading='shipping details'>
                                    <label className='pb-[9px] text-[0.75rem] font-bold leading-[auto] -tracking-[0.21px]'>
                                        Payment Method
                                    </label>
                                    <div className='grid gap-y-4'>
                                        <label
                                            htmlFor='emoney'
                                            className='flex items-center gap-4 rounded-lg border border-[#CFCFCF] px-4 py-[18px]'
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
                                            className='flex items-center gap-4 rounded-lg border border-[#CFCFCF] px-4 py-[18px]'
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
                                    <TextInput
                                        labelText='e-Money Number'
                                        name='enumber'
                                        placeholder='238521993'
                                    />
                                    <TextInput
                                        labelText='e-Money Pin'
                                        name='epin'
                                        placeholder='6891'
                                    />
                                </Fieldset>
                            </form>
                        </FormProvider>
                    </div>
                    <div className='sticky top-5 self-start py-8 px-[33px]'></div>
                </main>
            </section>
        </>
    )
}
