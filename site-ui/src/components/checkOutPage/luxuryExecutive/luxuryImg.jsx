import React from 'react'
import { useEffect, useState } from 'react'
import '../upscalePeaceful/apartmentImg.css'

const LuxuryImg = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://run.mocky.io/v3/306ab87b-fa78-4f6b-ae00-46c0b0b388d7').then(
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
          <img
            className='img-fluid p-1 apartment_img_list'
            src={curElem.apartmentImg}
            alt=''
          />
        )
      })}
    </>
  )
}

export default LuxuryImg
