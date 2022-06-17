import React from 'react'
import { LocalParking, People, Wifi } from '@material-ui/icons'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import RoomServiceIcon from '@mui/icons-material/RoomService'
import '../popularFacilities.css'

const CentaurusPopularFacilities = () => {
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
            <RoomServiceIcon className='room_icon' />
            <p>Room service</p>
          </div>
          <div className='local_parking'>
            <FitnessCenterIcon className='room_icon' />
            <p>Fitness Center</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CentaurusPopularFacilities
