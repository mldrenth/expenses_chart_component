import { useState } from 'react'
import '../styles/components/Bar.scss'
import { SpendingPropsCurrent } from '../interfaces'

const Bar = ({ day, amount, isCurrent }: SpendingPropsCurrent) => {
    const [showTooltip, setShowTooltip] = useState(false)
   
    let percentage: number = (amount / 52.36) * 100;

    const barStyle = {
        height: `${percentage}%`
    }
    return (
        <div className='bar-container flex flex-column align-items-center' style={barStyle}>{showTooltip && <div className='bar-tooltip'>${amount}</div>}<div onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)} className={isCurrent ? 'bar bar--today' : 'bar'}></div><p className='text-medium-brown'>{day}</p></div>
    )
}

export default Bar