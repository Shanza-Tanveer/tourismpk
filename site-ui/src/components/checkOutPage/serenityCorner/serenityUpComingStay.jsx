import React from 'react'
import { LockOpen } from '@material-ui/icons'
import '../upComingStay.css'

const SerenityUpComingStay = () => {
  return (
    <>
      <div className='coming_stay'>
        <div>
          <LockOpen className='lock-open_icon' />
          <h1>Book this apartment</h1>
        </div>
        <div>
          <p>Prices might go up, so secure your reservation today.</p>
        </div>
      </div>
    </>
  )
}

export default SerenityUpComingStay
