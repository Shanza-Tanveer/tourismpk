import React from 'react'
import '../apartmentFacilities.css'
import DeckIcon from '@mui/icons-material/Deck'
import NaturePeopleIcon from '@mui/icons-material/NaturePeople'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import LanguageIcon from '@mui/icons-material/Language'

const StunningFacilities3 = () => {
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
            <li>Sun deck</li>
            <li>Patio</li>
            <li>Balcony</li>
            <li>Terrace</li>
            <li>Garden</li>
          </ul>
        </div>
        <div>
          <NaturePeopleIcon className='facilities_icons' />
          <h6>Outdoor & View</h6>
          <p>Enjoy the view</p>
          <ul>
            <li>Mountain view</li>
            <li>Garden view</li>
          </ul>
        </div>
        <div>
          <AcUnitIcon className='facilities_icons' />
          <h6>Miscellaneous</h6>
          <ul>
            <li>Air conditioning</li>
            <li>Family rooms</li>
            <li>Non-smoking rooms</li>
            <li>Facilities for disabled guests</li>
            <li>Elevator</li>
            <li>Hypoallergenic room available</li>
            <li>Designated smoking area</li>
            <li>Wheelchair accessible</li>
          </ul>
        </div>
        <div>
          <LanguageIcon className='facilities_icons' />
          <h6>Languages Spoken</h6>
          <ul>
            <li>English</li>
            <li>Urdu</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default StunningFacilities3
