import React from 'react'
import ApartmentImgData from './apartmentImgData'
import ApartmentImgList from './apartmentImgList'
import { useEffect, useState } from 'react'
import './apartmentImg.css'

const ApartmentImg = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://run.mocky.io/v3/ab3680e5-4b5a-45c4-b197-e997f9809be1').then(
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
      {/* {ApartmentImgData.map((ApartmentImg) => {
        return (
          <ApartmentImgList
            key={ApartmentImg.id}
            {...ApartmentImg}
          ></ApartmentImgList>
        )
      })} */}

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

export default ApartmentImg
