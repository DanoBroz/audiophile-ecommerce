import { FormProvider, useForm } from 'react-hook-form'
import { Fieldset } from './Fieldset'
import { PaymentRadio } from './PaymentRadio'
import { TextInput } from './TextInput'

export const Content = () => {
    const methods = useForm({
        defaultValues: {
            payment: 'emoney',
        },
    })

    const { handleSubmit } = methods

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
    )
}
