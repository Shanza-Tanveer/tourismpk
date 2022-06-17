import React from 'react'
import { LocalParking, People, Wifi } from '@material-ui/icons'
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle'
import '../popularFacilities.css'

const SerenityPopularFacilities = () => {
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
          <div className='local_parking'>
            <Wifi className='room_icon' />
            <p>Free Wifi</p>
          </div>
          <div className='local_parking'>
            <AirportShuttleIcon className='room_icon' />
            <p>Airport shuttle</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SerenityPopularFacilities
