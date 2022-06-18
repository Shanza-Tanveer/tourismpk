import React from 'react'
import { LocalParking, People, Wifi } from '@material-ui/icons'
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import '../upscalePeaceful/popularFacilities.css'

const FreddyPopularFacilities = () => {
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
          <div className='local_parking'>
            <FitnessCenterIcon className='room_icon' />
            <p>Fitness center</p>
          </div>
          <div className='local_parking'>
            <RestaurantIcon className='room_icon' />
            <p>Restaurant</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default FreddyPopularFacilities
