import React from 'react'
import './apartmentFacilities.css'
import DeckIcon from '@mui/icons-material/Deck'
import NaturePeopleIcon from '@mui/icons-material/NaturePeople'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import LanguageIcon from '@mui/icons-material/Language'

const ApartmentFacilities3 = () => {
  return (
    <>
      <div className='apartment_facilities1'>
        <div>
          <DeckIcon className='facilities_icons' />
          <h6>Outdoors</h6>
          <p>Sit back and relax</p>
          <ul>
            <li>Outdoor dining area</li>
            <li>Terrace</li>
          </ul>
        </div>
        <div>
          <NaturePeopleIcon className='facilities_icons' />
          <h6>Outdoor & View</h6>
          <p>Enjoy the view</p>
          <ul>
            <li>Mountain view</li>
          </ul>
        </div>
        <div>
          <AcUnitIcon className='facilities_icons' />
          <h6>Miscellaneous</h6>
          <ul>
            <li>Air conditioning</li>
            <li>Family rooms</li>
            <li>Non-smoking rooms</li>
          </ul>
        </div>
        <div>
          <LanguageIcon className='facilities_icons' />
          <h6>Languages Spoken</h6>
          <ul>
            <li>English</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default ApartmentFacilities3
