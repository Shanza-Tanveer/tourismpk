import React from 'react'
import { CreditCardOutlined } from '@material-ui/icons'
import '../creditCard.css'

const SerenityCreditCard = () => {
  return (
    <>
      <div className='credit_card'>
        <div>
          <CreditCardOutlined className='credit_icon' />
          <h1>No credit card needed to book.</h1>
        </div>
        <div>
          <p>We'll send you an email confirming your reservation.</p>
        </div>
      </div>
    </>
  )
}

export default SerenityCreditCard
