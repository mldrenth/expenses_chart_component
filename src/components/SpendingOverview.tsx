import { useState } from 'react';
import '../styles/components/SpendingOverview.scss'
import data from '../data.json'
import { SpendingProps } from '../interfaces';
import Bar from './Bar';




const SpendingOverview = () => {
    const [weeklySpending, setWeeklySpending] = useState<SpendingProps[]>(data)

    const bars = () => {
        return weeklySpending.map(entry => {
            return <Bar day={entry.day} amount={entry.amount} />
        })
    }

    return (
        <div className='overview-card'>
            <p className='font-bold text-dark-brown'>Spending - Last 7 Days</p>
            <div className='flex justify-content-evenly align-items-end bars-container'>{bars()}</div>
            <div className='divider'></div>
            <div className='flex flex-row justify-content-between'>
                <div><p className='text-medium-brown'>Total this month
                </p><p className='font-bold text-dark-brown font-size-lg'>$478.33</p></div> <div className='flex flex-column'><p className='font-bold text-dark-brown mt-1 text-right'>+2.4%</p><p className='text-medium-brown'>from last month</p></div></div>
        </div>
    )
}

export default SpendingOverview;