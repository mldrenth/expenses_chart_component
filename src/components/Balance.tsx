import React from 'react';
import '../styles/components/Balance.scss'
import logo from '../images/logo.svg'

interface BalanceProps {
    balance: number
}

const Balance = ({ balance }: BalanceProps) => {
    return (
        <div className='balance-card flex flex-row justify-content-between'>
            <div><p className='mb-half'>My balance</p><p className='font-bold'>$ {balance}</p></div> <img alt='logo' src={logo}></img>
        </div>
    )
}

export default Balance