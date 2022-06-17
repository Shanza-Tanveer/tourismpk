import React from 'react'
import { NavLink } from 'react-router-dom'
import { Check } from '@material-ui/icons'
import '../priceMatch.css'

const FreddyPriceMatch = () => {
  return (
    <>
      <div className='price_match'>
        <ul>
          <NavLink to=''>
            <Check className='check_icon' />
            <li>We Price Match</li>
          </NavLink>
        </ul>
      </div>
    </>
  )
}

export default FreddyPriceMatch
