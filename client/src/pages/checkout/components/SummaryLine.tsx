import classnames from 'classnames'

interface SummaryLineProps {
    summaryLable: string
    amount: number
    hasBiggerPadding?: boolean
    hasOrangeAmount?: boolean
}

export const SummaryLine = (props: SummaryLineProps) => {
    const {
        summaryLable,
        amount,
        hasBiggerPadding = false,
        hasOrangeAmount = false,
    } = props

    return (
        <div
            className={classnames('flex justify-between', {
                'pb-6': !hasBiggerPadding,
                'pb-2': hasBiggerPadding,
            })}
        >
            <span className='inline-block uppercase text-black/50'>
                {summaryLable}
            </span>
            <h6 className={hasOrangeAmount ? 'text-Orange-dark' : ''}>
                $ {amount.toLocaleString()}
            </h6>
        </div>
    )
}
