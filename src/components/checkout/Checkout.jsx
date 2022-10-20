import React from 'react'
import Payment from './Payment'
import './checkout.css'

function Checkout(data) {
  return (
   <div className="payment-container">
    <span className="amount">${data.amount}</span>
    <Payment className='payment'/>
   </div>
  )
}

export default Checkout