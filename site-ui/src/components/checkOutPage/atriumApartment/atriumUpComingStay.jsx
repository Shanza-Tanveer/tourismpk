import React from 'react'
import { LockOpen } from '@material-ui/icons'
import '../upscalePeaceful/upComingStay.css'

const AtriumUpComingStay = () => {
  return (
    <>
      <div className='coming_stay'>
        <div>
          <LockOpen className='lock-open_icon' />
          <h1>Lock in a great price for your upcoming stay</h1>
        </div>
        <div>
          <p>Get instant confirmation with FREE cancellation on most rooms!</p>
        </div>
      </div>
    </>
  )
}

export default AtriumUpComingStay
