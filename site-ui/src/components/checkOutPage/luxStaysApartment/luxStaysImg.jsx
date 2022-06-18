import React from 'react'
import { useEffect, useState } from 'react'
import '../upscalePeaceful/apartmentImg.css'

const LuxStaysImg = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://run.mocky.io/v3/2b2d20d6-712a-48d3-b82b-1d3b57211f50').then(
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

export default LuxStaysImg
