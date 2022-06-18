import React from 'react'
import '../upscalePeaceful/apartmentFacilities.css'
import { LocalParking, Wifi, Kitchen, Bathtub } from '@material-ui/icons'
import KingBedIcon from '@mui/icons-material/KingBed'

const AtriumFacilities1 = () => {
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
            <li>WiFi is available in the hotel rooms and is free of charge.</li>
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
            <li>Oven</li>
            <li>Microwave</li>
            <li>Refrigerator</li>
          </ul>
        </div>
        <div>
          <KingBedIcon className='facilities_icons' />
          <h6>Bedroom</h6>
          <ul>
            <li>Linens</li>
            <li>Wardrobe or closet</li>
          </ul>
        </div>
        <div>
          <Bathtub className='facilities_icons' />
          <h6>Bathroom</h6>
          <ul>
            <li>Toilet paper</li>
            <li>Towels</li>
            <li>Guest bathroom</li>
            <li>Slippers</li>
            <li>Private Bathroom</li>
            <li>Toilet</li>
            <li>Shower</li>
            <li>Free toiletries</li>
            <li>Bathrobe</li>
            <li>Bathtub</li>
            <li>Shower</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default AtriumFacilities1
