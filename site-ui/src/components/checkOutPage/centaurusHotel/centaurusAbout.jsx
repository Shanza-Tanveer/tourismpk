import React from 'react'
import { useEffect, useState } from 'react'
import '../apartmentAbout.css'

const CentaurusAbout = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://run.mocky.io/v3/184163e6-becf-4adf-9e71-7c2feb98f7a1').then(
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

export default CentaurusAbout
