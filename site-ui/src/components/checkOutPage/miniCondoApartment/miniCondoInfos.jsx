import React from 'react'
import { useEffect, useState } from 'react'
import { Check } from '@material-ui/icons'
import '../upscalePeaceful/apartmentInfo.css'

const MiniCondoInfos = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://run.mocky.io/v3/4c2c7f82-d19c-4a67-90dd-6173e84b1965').then(
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
          <div className='row mt-3 main_apartment_info'>
            <div className='col-sm-8'>
              <div className='row'>
                <div className='col-sm-12 top_apartment_info '>
                  <p>Apartment</p>
                  <h1>{curElem.apartmentName}</h1>
                </div>
                <div className='col-sm-10 bottom_apartment_info_p '>
                  <p>{curElem.apartmentAddress}</p>
                </div>
              </div>
            </div>
            <div className='col-sm-4'>
              <div className='row'>
                <div className='col-sm-12 top_apartment_info'>
                  <button>Reserve your apartment stay</button>
                </div>
                <div className='col-sm-11 bottom_apartment_info_p1'>
                  <Check className='check_icons' />
                  <p>{curElem.price}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default MiniCondoInfos
