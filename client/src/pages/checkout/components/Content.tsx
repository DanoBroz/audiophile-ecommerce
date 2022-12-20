import { FormProvider, useForm } from 'react-hook-form'
import { Fieldset } from './Fieldset'
import { PaymentRadio } from './PaymentRadio'
import { TextInput } from './TextInput'
import { ReactComponent as CashOnDeliveryIcon } from '../../../assets/checkout/icon-cash-on-delivery.svg'

export const Content = () => {
    const methods = useForm({
        defaultValues: {
            payment: 'emoney',
        },
    })

    const { handleSubmit, watch } = methods

    const payment = watch('payment')

    return (
        <FormProvider {...methods}>
            <form
                className='grid gap-[53px]'
                onSubmit={handleSubmit((data) => console.log(data))}
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
                    <PaymentRadio />
                    {payment === 'emoney' && (
                        <>
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
                        </>
                    )}
                    {payment === 'cash' && (
                        <div className='col-span-2 grid grid-cols-[max-content,_auto] items-center gap-8'>
                            <CashOnDeliveryIcon className='w-12' />
                            <p className='opacity-50'>
                                The ‘Cash on Delivery’ option enables you to pay
                                in cash when our delivery courier arrives at
                                your residence. Just make sure your address is
                                correct so that your order will not be
                                cancelled.
                            </p>
                        </div>
                    )}
                </Fieldset>
            </form>
        </FormProvider>
    )
}
