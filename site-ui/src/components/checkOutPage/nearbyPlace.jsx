import React from 'react'
import NearbyPlaceData from './nearbyPlaceData'
import NearbyPlaceList from './nearbyPlaceList'
import { DirectionsWalk } from '@material-ui/icons'
import { useEffect, useState } from 'react'
import './nearbyPlace.css'

const NearbyPlace = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://run.mocky.io/v3/087f5b3a-ea00-4568-819d-41a0ec06ef0c').then(
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
      {/* {NearbyPlaceData.map((areaData) => {
        return (
          <NearbyPlaceList key={areaData.id} {...areaData}></NearbyPlaceList>
        )
      })} */}
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

export default NearbyPlace
