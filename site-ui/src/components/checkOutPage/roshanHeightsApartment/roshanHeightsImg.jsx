import React from 'react'
import { useEffect, useState } from 'react'
import '../upscalePeaceful/apartmentImg.css'

const RoshanHeightsImg = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://run.mocky.io/v3/adaa8495-62a8-4b49-a000-0a02d981e648').then(
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

export default RoshanHeightsImg
