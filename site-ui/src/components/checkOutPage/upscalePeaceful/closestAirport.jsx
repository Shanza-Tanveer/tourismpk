import React from 'react'
import ClosestAirportData from './closestAirportData'
import ClosestAirportList from './closestAirportList'
import { Flight } from '@material-ui/icons'
import { useEffect, useState } from 'react'
import './nearbyPlace.css'

const ClosestAirport = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://run.mocky.io/v3/648f3113-3dfb-4843-8917-3631443752a5').then(
      (result) => {
        result.json().then((resp) => {
          setData(resp)
          console.log(resp)
        })
      }
    )
  }, [setData])

  console.warn(data)
  return (
    <>
      <div className='nearby_heading'>
        <Flight className='direction_icon' />
        <h2>Closest Airports</h2>
      </div>
      {/* {ClosestAirportData.map((airportData) => {
        return (
          <ClosestAirportList
            key={airportData.id}
            {...airportData}
          ></ClosestAirportList>
        )
      })} */}
      {data.map((curElem) => {
        return (
          <div className='nearby_place'>
            <ul>
              <div>
                <li>{curElem.closestAirport}</li>
              </div>
              <div>
                <li>{curElem.airportDistance}</li>
              </div>
            </ul>
          </div>
        )
      })}
    </>
  )
}

export default ClosestAirport
