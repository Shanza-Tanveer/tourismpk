import React from 'react'
import { DirectionsWalk } from '@material-ui/icons'
import { useEffect, useState } from 'react'
import '../upscalePeaceful/nearbyPlace.css'

const AtriumNearbyPlace = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://run.mocky.io/v3/297a510c-7e66-4ee5-9db6-cd699f9f29bc').then(
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

export default AtriumNearbyPlace
