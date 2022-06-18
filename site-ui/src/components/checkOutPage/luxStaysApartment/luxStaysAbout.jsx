import React from 'react'
import { useEffect, useState } from 'react'
import '../upscalePeaceful/apartmentAbout.css'

const LuxStaysAbout = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://run.mocky.io/v3/8bbeebde-48c5-49d6-92a7-bd49fcff6b64').then(
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

export default LuxStaysAbout
