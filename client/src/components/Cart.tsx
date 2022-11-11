import { PortalFunctionParams, PortalWithState } from 'react-portal'

export const Cart = (props: PortalFunctionParams) => (
    <PortalWithState
        closeOnOutsideClick
        closeOnEsc
        defaultOpen
    >
        {({ openPortal = props.openPortal, closePortal, isOpen, portal }) => (
            <>
                <button onClick={openPortal}>Open Portal</button>
                {portal(
                    <p>
                        This is more advanced Portal. It handles its own state.{' '}
                        <button onClick={closePortal}>Close me!</button>, hit
                        ESC or click outside of me.
                    </p>
                )}
            </>
        )}
    </PortalWithState>
)
