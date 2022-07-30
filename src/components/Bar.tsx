import React from 'react'
import '../styles/components/Bar.scss'
import { SpendingProps } from '../interfaces'

const Bar = ({ day, amount }: SpendingProps) => {
    return (
        <div className='bar-container flex flex-column'><div className='bar'></div><p className='text-medium-brown'>{day}</p></div>
    )
}

export default Bar