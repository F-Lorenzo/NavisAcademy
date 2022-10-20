import React from 'react'
import Payment from './Payment'
import './checkout.css'

function Checkout({price,amount}) {
  console.log(price)
  console.log(amount)
  return (
   <div className="payment-container">
    <span className="amount">${price}</span>
    <Payment className='payment'/>
   </div>
  )
}

export default Checkout