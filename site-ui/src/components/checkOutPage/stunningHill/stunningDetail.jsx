import React from 'react'
// import '../apartmentDetail.css'
import {
  HomeSharp,
  Kitchen,
  LocationCityOutlined,
  PetsOutlined,
} from '@material-ui/icons'
import '../upscalePeaceful/apartmentDetail.css'

const StunningDetail = () => {
  return (
    <>
      <div className='apartment_detail'>
        <ul>
          <div>
            <HomeSharp className='apartment_icon' />
            <li>Whole apartment</li>
          </div>
          <div>
            <p>139 km</p>
            <li>Size</li>
          </div>
          <div>
            <Kitchen className='kitchen_icon' />
            <li>Kitchen</li>
          </div>
          <div>
            <LocationCityOutlined className='city_icon' />
            <li>City view</li>
          </div>
          <div>
            <PetsOutlined className='pet_icon' />
            <li>Pet friendly</li>
          </div>
        </ul>
      </div>
    </>
  )
}

export default StunningDetail
