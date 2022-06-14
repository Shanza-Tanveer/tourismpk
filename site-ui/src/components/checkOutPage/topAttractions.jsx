import React from 'react'
import TopAttractionList from './topAttractionList'
import TopAttractionsData from './topAttractionsData'
import { Museum } from '@material-ui/icons'

const TopAttractions = () => {
  return (
    <>
      <div className='nearby_heading'>
        <Museum className='direction_icon' />
        <h2>Top attractions</h2>
      </div>
      {TopAttractionsData.map((attractionsData) => {
        return (
          <TopAttractionList
            key={attractionsData.id}
            {...attractionsData}
          ></TopAttractionList>
        )
      })}
    </>
  )
}

export default TopAttractions
