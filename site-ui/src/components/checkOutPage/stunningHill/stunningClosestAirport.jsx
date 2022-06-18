import React from 'react'
import { Flight } from '@material-ui/icons'
import { useEffect, useState } from 'react'
// import '../nearbyPlace.css'
import '../upscalePeaceful/nearbyPlace.css'

const StunningClosestAirport = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://run.mocky.io/v3/a2c96285-b91e-4dc0-bd3e-f167f4c2d72d').then(
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

export default StunningClosestAirport
