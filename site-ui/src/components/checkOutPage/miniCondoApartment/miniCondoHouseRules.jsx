import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import CancelIcon from '@mui/icons-material/Cancel'
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom'
import PersonIcon from '@mui/icons-material/Person'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import PetsIcon from '@mui/icons-material/Pets'
import '../upscalePeaceful/houseRules.css'

const MiniCondoHouseRules = () => {
  return (
    <>
      <div className='house_rules'>
        <div className='top_house_box'>
          <div className='house_box'>
            <h1>House rules</h1>
            <button>See Availability</button>
          </div>
          <div>
            <p>
              Mini Condo-1BHK-Prime Location takes special requests – add in the
              next step!
            </p>
          </div>
        </div>
        <div className='bottom_house_box'>
          <div className='check_in_time'>
            <div className='check_time'>
              <CalendarMonthIcon className='house_rule_icon' />
              <h3>Check-in</h3>
              <div className='timebar'>
                <div className='timebar__core'>
                  <div className='timebar__base'>
                    <div
                      className='timebar__bar'
                      style={{ left: '50%', width: '50%' }}
                    />
                  </div>
                  <div
                    className='timebar__label'
                    style={{ left: '50%', marginLeft: '-24.5px' }}
                  >
                    2:30&nbsp;PM
                  </div>
                  <div
                    className='timebar__label'
                    style={{ left: '100%', marginLeft: '-24.5px' }}
                  >
                    10:00&nbsp;PM
                  </div>
                  <div
                    className='timebar__caption'
                    style={{ left: '75%', marginLeft: '-66.5px' }}
                  >
                    2:30&nbsp;PM - 10:00&nbsp;PM
                    <div className='timebar__caption-pointer'></div>
                  </div>
                </div>
              </div>
            </div>
            <p className='property-p'>
              You need to let the property know what time you'll be arriving in
              advance.
            </p>
          </div>
          <div className='check_out_time'>
            <CalendarMonthIcon className='house_rule_icon' />
            <h3>Check-out</h3>
            <div class='timebar'>
              <div class='timebar__core'>
                <div class='timebar__base'>
                  <div
                    class='timebar__bar'
                    style={{ left: '50%', width: '2.0833333333333357%' }}
                  />
                </div>
                <div
                  class='timebar__label'
                  style={{ left: '50%', marginLeft: '-50.5px' }}
                >
                  10:00&nbsp;AM
                </div>

                <div
                  class='timebar__label'
                  style={{ left: '52.0833%', marginLeft: '1.5px' }}
                >
                  11:00&nbsp;AM
                </div>

                <div
                  class='timebar__caption'
                  style={{ left: '51.0417%', marginLeft: '-66px' }}
                >
                  10:00&nbsp;AM - 11:00&nbsp;AM
                  <div class='timebar__caption-pointer' />
                </div>
              </div>
            </div>
          </div>
          <div className='cancellation_box'>
            <CancelIcon className='cancel_icon' />
            <h3>Cancellation/ prepayment</h3>
            <p>
              Cancellation and prepayment policies vary according to apartment
              type. Please enter the dates of your stay and check what
              conditions apply to your preferred room.
            </p>
          </div>
          <div className='beds_box'>
            <FamilyRestroomIcon className='house_rule_icon' />
            <h3 className='bed_heading'>Children & Beds</h3>
            <div>
              <h6>Child policies</h6>
              <p>Children of all ages are welcome.</p>
              <p>
                To see correct prices and occupancy info, add the number and
                ages of children in your group to your search.
              </p>
              <h6>Crib and extra bed policies</h6>
              <p>No cribs or extra beds are available.</p>
            </div>
          </div>
          <div className='restriction_box'>
            <PersonIcon className='house_rule_icon' />
            <h3>No age restriction</h3>
            <p>There's no age requirement for check-in</p>
          </div>
          <div className='payment_box'>
            <CreditCardIcon className='house_rule_icon' />
            <h3>Cash only</h3>
            <p>This property only accepts cash payments.</p>
          </div>
          <div className='pets_box'>
            <PetsIcon className='house_rule_icon' />
            <h3>Pets</h3>
            <p>Pets are allowed. No extra charges.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MiniCondoHouseRules
