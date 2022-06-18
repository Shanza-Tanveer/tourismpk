import React from 'react'
import { NavLink } from 'react-router-dom'
import '../upscalePeaceful/apartmentInfoList.css'

const AtriumInfoList = () => {
  return (
    <>
      <div className='col-sm-3'></div>
      <div className='col-sm-12'>
        <div className='apartment_info_list'>
          <ul>
            <NavLink to=''>
              <li>Apartment Info & Price</li>
            </NavLink>
            <NavLink to=''>
              <li>Facilities</li>
            </NavLink>
            <NavLink to=''>
              <li>House rules</li>
            </NavLink>
            <NavLink to=''>
              <li>Guest reviews (67)</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  )
}

export default AtriumInfoList
