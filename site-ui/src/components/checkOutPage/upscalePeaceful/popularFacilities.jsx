import React from 'react'
import { KingBed, LocalParking, People } from '@material-ui/icons'
import './popularFacilities.css'

const PopularFacilities = () => {
  return (
    <>
      <div className='popular_facilities'>
        <div>
          <h2>Most popular facilities</h2>
        </div>
        <div className='family_parking'>
          <div className='king_bed'>
            <People className='room_icon' />
            <p>Family rooms</p>
          </div>
          <div className='local_parking'>
            <LocalParking className='parking_icons' />
            <p>Free parking</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PopularFacilities
