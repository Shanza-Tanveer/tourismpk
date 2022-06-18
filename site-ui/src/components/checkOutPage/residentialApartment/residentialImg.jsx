import React from 'react'
import { useEffect, useState } from 'react'
import '../upscalePeaceful/apartmentImg.css'

const ResidentialImg = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://run.mocky.io/v3/beff9d95-55c6-4f3e-96f2-7f484d653062').then(
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

export default ResidentialImg
