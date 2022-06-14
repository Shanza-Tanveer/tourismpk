import React from 'react'
import './apartmentFacilities.css'
import { LocalParking, Wifi, Kitchen, Bathtub } from '@material-ui/icons'
import KingBedIcon from '@mui/icons-material/KingBed'

const ApartmentFacilities1 = () => {
  return (
    <>
      <div className='apartment_facilities1'>
        <div>
          <LocalParking className='localParking_icon' />
          <h6>Parking</h6>
          <ul>
            <li>
              Free public parking is available on site (reservation is needed).
            </li>
          </ul>
        </div>
        <div>
          <Wifi className='facilities_icons' />
          <h6>Internet</h6>
          <ul>
            <li>No internet access available.</li>
          </ul>
        </div>
        <div>
          <Kitchen className='facilities_icons' />
          <h6>Kitchen</h6>
          <p>Freedom to eat when you want</p>
          <ul>
            <li>Dining table</li>
            <li>Cleaning products</li>
            <li>Kitchen</li>
            <li>Dishwasher</li>
            <li>Microwave</li>
            <li>Refrigerator</li>
          </ul>
        </div>
        <div>
          <KingBedIcon className='facilities_icons' />
          <h6>Bedroom</h6>
          <ul>
            <li>Walk-in closet</li>
          </ul>
        </div>
        <div>
          <Bathtub className='facilities_icons' />
          <h6>Bathroom</h6>
          <ul>
            <li>Toilet paper</li>
            <li>Towels</li>
            <li>Slippers</li>
            <li>Private Bathroom</li>
            <li>Toilet</li>
            <li>Shower</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default ApartmentFacilities1
