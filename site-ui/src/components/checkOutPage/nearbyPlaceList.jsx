import React from 'react'
import './nearbyPlace.css'

const NearbyPlaceList = ({ nearbyPlace, placeDistance }) => {
  return (
    <>
      <div className='nearby_place'>
        <ul>
          <div>
            <li>{nearbyPlace}</li>
          </div>
          <div>
            <li>{placeDistance}</li>
          </div>
        </ul>
      </div>
    </>
  )
}

export default NearbyPlaceList
