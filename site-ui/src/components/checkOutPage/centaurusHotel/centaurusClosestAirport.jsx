import React from 'react'
import { Flight } from '@material-ui/icons'
import { useEffect, useState } from 'react'
import '../upscalePeaceful/nearbyPlace.css'

const CentaurusClosestAirport = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://run.mocky.io/v3/d1e69a1e-764a-4df8-9aff-020495c338ce').then(
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

export default CentaurusClosestAirport
