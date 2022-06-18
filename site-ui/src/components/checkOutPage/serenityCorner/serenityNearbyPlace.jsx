import React from 'react'
import { DirectionsWalk } from '@material-ui/icons'
import { useEffect, useState } from 'react'
import '../upscalePeaceful/nearbyPlace.css'

const SerenityNearbyPlace = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://run.mocky.io/v3/ee62dc01-39d4-4493-8f68-9e34e3dcbe26').then(
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
        <DirectionsWalk className='direction_icon' />
        <h2>What's nearby</h2>
      </div>
      {data.map((curElem) => {
        return (
          <div className='nearby_place'>
            <ul>
              <div>
                <li>{curElem.nearbyPlace}</li>
              </div>
              <div>
                <li>{curElem.placeDistance}</li>
              </div>
            </ul>
          </div>
        )
      })}
    </>
  )
}

export default SerenityNearbyPlace
