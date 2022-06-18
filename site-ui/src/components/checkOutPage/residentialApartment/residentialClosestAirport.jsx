import React from 'react'
import { Flight } from '@material-ui/icons'
import { useEffect, useState } from 'react'
import '../upscalePeaceful/nearbyPlace.css'

const ResidentialClosestAirport = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://run.mocky.io/v3/0d89a05a-4def-441a-9e64-fe5b678e1064').then(
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

export default ResidentialClosestAirport
