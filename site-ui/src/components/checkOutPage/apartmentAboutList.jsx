import React from 'react'
import './apartmentAbout.css'

const ApartmentAboutList = ({
  geniusDiscount,
  location,
  aboutApartment,
  apartmentFacility,
  outingPlacesDistance,
  registeredDate,
}) => {
  return (
    <>
      <div className='apartment_about'>
        <div>
          <p>{geniusDiscount}</p>
        </div>
        <div>
          <p>{location}</p>
        </div>
        <div>
          <p>{aboutApartment}</p>
        </div>
        <div>
          <p>{apartmentFacility}</p>
        </div>
        <div>
          <p>{outingPlacesDistance}</p>
        </div>
        <div>
          <h6>{registeredDate}</h6>
        </div>
      </div>
    </>
  )
}

export default ApartmentAboutList
