import React from 'react'
import './nearbyPlace.css'

const TopAttractionList = ({ topAttraction, attractionDistance }) => {
  return (
    <>
      <div className='nearby_place'>
        <ul>
          <div>
            <li>{topAttraction}</li>
          </div>
          <div>
            <li>{attractionDistance}</li>
          </div>
        </ul>
      </div>
    </>
  )
}

export default TopAttractionList
