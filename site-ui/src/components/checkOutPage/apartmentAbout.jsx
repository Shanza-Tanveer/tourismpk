import React from 'react'
import ApartmentAboutData from './apartmentAboutData'
import ApartmentAboutList from './apartmentAboutList'
import { useEffect, useState } from 'react'
import './apartmentAbout.css'

const ApartmentAbout = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://run.mocky.io/v3/f0fd7f64-6168-4787-b536-eb9c76141ae3').then(
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
      {/* {ApartmentAboutData.map((aboutData) => {
        return (
          <ApartmentAboutList
            key={aboutData.id}
            {...aboutData}
          ></ApartmentAboutList>
        )
      })} */}

      {data.map((curElem) => {
        return (
          <div className='apartment_about'>
            <div>
              <p>{curElem.geniusDiscount}</p>
            </div>
            <div>
              <p>{curElem.location}</p>
            </div>
            <div>
              <p>{curElem.aboutApartment}</p>
            </div>
            <div>
              <p>{curElem.apartmentFacility}</p>
            </div>
            <div>
              <p>{curElem.outingPlacesDistance}</p>
            </div>
            <div>
              <h6>{curElem.registeredDate}</h6>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ApartmentAbout
