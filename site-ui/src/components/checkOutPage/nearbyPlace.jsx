import React from 'react'
import NearbyPlaceData from './nearbyPlaceData'
import NearbyPlaceList from './nearbyPlaceList'
import { DirectionsWalk } from '@material-ui/icons'
import './nearbyPlace.css'

const NearbyPlace = () => {
  return (
    <>
      <div className='nearby_heading'>
        <DirectionsWalk className='direction_icon' />
        <h2>What's nearby</h2>
      </div>
      {NearbyPlaceData.map((areaData) => {
        return (
          <NearbyPlaceList key={areaData.id} {...areaData}></NearbyPlaceList>
        )
      })}
    </>
  )
}

export default NearbyPlace
