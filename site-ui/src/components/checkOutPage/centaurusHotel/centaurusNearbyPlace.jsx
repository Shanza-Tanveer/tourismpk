import React from 'react'
import { DirectionsWalk } from '@material-ui/icons'
import { useEffect, useState } from 'react'
import '../nearbyPlace.css'

const CentaurusSerenityNearbyPlace = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://run.mocky.io/v3/16ec0484-b563-4f89-bf83-8b6faa875b6b').then(
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

export default CentaurusSerenityNearbyPlace
