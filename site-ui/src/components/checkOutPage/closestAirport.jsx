import React from 'react'
import ClosestAirportData from './closestAirportData'
import ClosestAirportList from './closestAirportList'
import { Flight } from '@material-ui/icons'
import './nearbyPlace.css'

const ClosestAirport = () => {
  return (
    <>
      <div className='nearby_heading'>
        <Flight className='direction_icon' />
        <h2>Closest Airports</h2>
      </div>
      {ClosestAirportData.map((airportData) => {
        return (
          <ClosestAirportList
            key={airportData.id}
            {...airportData}
          ></ClosestAirportList>
        )
      })}
    </>
  )
}

export default ClosestAirport
