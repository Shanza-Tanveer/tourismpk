import React from 'react'
import TopAttractionList from './topAttractionList'
import TopAttractionsData from './topAttractionsData'
import { Museum } from '@material-ui/icons'
import { useEffect, useState } from 'react'
import './nearbyPlace.css'

const TopAttractions = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://run.mocky.io/v3/a1964fb5-f03c-4451-8674-a15b8799cbdc').then(
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
      {/* {TopAttractionsData.map((attractionsData) => {
        return (
          <TopAttractionList
            key={attractionsData.id}
            {...attractionsData}
          ></TopAttractionList>
        )
      })} */}
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

export default TopAttractions
