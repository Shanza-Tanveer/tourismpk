import React from 'react'
import { useEffect, useState } from 'react'
// import '../apartmentImg.css'
import '../upscalePeaceful/apartmentImg.css'

const StunningImg = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://run.mocky.io/v3/8bf3406e-bb52-443c-bcb6-6fde61106652').then(
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

export default StunningImg
