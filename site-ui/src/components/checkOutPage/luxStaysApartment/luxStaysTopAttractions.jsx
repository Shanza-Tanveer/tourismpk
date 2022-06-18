import React from 'react'
import { Museum } from '@material-ui/icons'
import { useEffect, useState } from 'react'
import '../upscalePeaceful/nearbyPlace.css'

const LuxStaysTopAttractions = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://run.mocky.io/v3/dd042d07-15be-4029-8b31-658ec0f3968e').then(
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
        <Museum className='direction_icon' />
        <h2>Top attractions</h2>
      </div>
      {data.map((curElem) => {
        return (
          <div className='nearby_place'>
            <ul>
              <div>
                <li>{curElem.topAttraction}</li>
              </div>
              <div>
                <li>{curElem.attractionDistance}</li>
              </div>
            </ul>
          </div>
        )
      })}
    </>
  )
}

export default LuxStaysTopAttractions
