import React from 'react'
import '../styles/components/Bar.scss'
import { SpendingProps } from '../interfaces'

const Bar = ({ day, amount }: SpendingProps) => {
    let percentage: number = (amount / 52.36) * 100;

    const barStyle = {
        height: `${percentage}%`
    }
    return (
        <div className='bar-container flex flex-column'><div className={amount === 52.36? 'bar bar--max' : 'bar'}style={barStyle}></div><p className='text-medium-brown'>{day}</p></div>
    )
}

export default Bar