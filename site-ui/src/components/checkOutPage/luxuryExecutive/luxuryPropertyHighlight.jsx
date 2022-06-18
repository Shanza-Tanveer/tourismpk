import React from 'react'
import { LocationOn, LocalParking } from '@material-ui/icons'
import '../upscalePeaceful/propertyHighlight.css'

const LuxuryPropertyHighlight = () => {
  return (
    <>
      <div className='property_highlight'>
        <div>
          <h2>Property Highlights</h2>
        </div>
        <div>
          <LocationOn className='location_icon' />
          <p>Top Location: Highly rated by recent guests (9.0)</p>
        </div>
        <div>
          <LocalParking className='parking_icon' />
          <p>Free Parking Available On Site</p>
        </div>
        <button>Reserve</button>
      </div>
    </>
  )
}

export default LuxuryPropertyHighlight
