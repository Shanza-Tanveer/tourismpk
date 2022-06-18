import React from 'react'
import { useEffect, useState } from 'react'
import '../upscalePeaceful/apartmentImg.css'

const AtriumImg = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://run.mocky.io/v3/e670f46d-7237-45b7-bf87-ce0e8b679e20').then(
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

export default AtriumImg
