import { useReducer } from 'react'

interface UseCounterProps {
    initialAmount?: number
}

export const useCounter = ({ initialAmount }: UseCounterProps) => {
    const reducer = (
        state: { counter: number },
        action: { type: 'increment' | 'decrement' }
    ) => {
        switch (action.type) {
            case 'increment': {
                return {
                    counter:
                        state.counter < 10 ? state.counter + 1 : state.counter,
                }
            }
            case 'decrement': {
                return {
                    counter:
                        state.counter > 1 ? state.counter - 1 : state.counter,
                }
            }
        }
    }

    const [state, dispatch] = useReducer(reducer, {
        counter: initialAmount || 1,
    })

    return { state, dispatch }
}
