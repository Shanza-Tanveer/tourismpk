import React from 'react'
import '../apartmentFacilities.css'
import ChairIcon from '@mui/icons-material/Chair'
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows'
import NightShelterIcon from '@mui/icons-material/NightShelter'
import PetsIcon from '@mui/icons-material/Pets'

const FreddyFacilities2 = () => {
  return (
    <>
      <div className='apartment_facilities1'>
        <div>
          <ChairIcon className='facilities_icons' />
          <h6>Living Area</h6>
          <p>Space for everyone to be together</p>
          <ul>
            <li>Dining area</li>
            <li>Sofa</li>
            <li>Fireplace</li>
            <li>Desk</li>
          </ul>
        </div>
        <div>
          <DesktopWindowsIcon className='facilities_icons' />
          <h6>Media & Technology</h6>
          <p>Fun for everyone under one roof</p>
          <ul>
            <li>Flat-screen TV</li>
            <li>Laptop safe</li>
            <li>TV</li>
          </ul>
        </div>
        <div>
          <NightShelterIcon className='facilities_icons' />
          <h6>Room Amenities</h6>
          <p>Extra comfort</p>
          <ul>
            <li>Socket near the bed</li>
            <li>Sofa bed</li>
            <li>Clothes rack</li>
            <li>Tile/Marble floor</li>
            <li>Soundproof</li>
            <li>Private entrance</li>
            <li>Heating</li>
            <li>Fan</li>
            <li>Iron</li>
            <li>Carpeted</li>
          </ul>
        </div>
        <div>
          <PetsIcon className='facilities_icons' />
          <h6>Pets</h6>
          <p>Pets are allowed. No extra charges.</p>
        </div>
      </div>
    </>
  )
}

export default FreddyFacilities2
