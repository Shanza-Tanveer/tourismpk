import React from 'react'
import SearchFilter from '../../listingPage/SearchFilter'
import FreddyAbout from './freddyAbout'
import FreddyAccommodationType from './freddyAccommodationType'
import FreddyAreaInfo from './freddyAreaInfo'
import FreddyAvailability from './freddyAvailability'
import FreddyClosestAirport from './freddyClosestAirport'
import FreddyCreditCard from './freddyCreditCard'
import FreddyDetail from './freddyDetail'
import FreddyFacilities1 from './freddyFacilities1'
import FreddyFacilities2 from './freddyFacilities2'
import FreddyFacilities3 from './freddyFacilities3'
import FreddyFacility from './freddyFacility'
import FreddyHouseRules from './freddyHouseRules'
import FreddyImg from './freddyImg'
import FreddyInfoList from './freddyInfoList'
import FreddyInfos from './freddyInfos'
import FreddyNearbyPlace from './freddyNearbyPlace'
import FreddyPopularFacilities from './freddyPopularFacilities'
import FreddyPriceMatch from './freddyPriceMatch'
import FreddyPropertyHighlight from './freddyPropertyHighlight'
import FreddyTopAttractions from './freddyTopAttractions'
import FreddyUpComingStay from './freddyUpComingStay'

const Freddy = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='row'>
              <div className='col-md-12'>
                <FreddyPriceMatch />
              </div>
              <div className='col-md-12'>
                <SearchFilter />
              </div>
            </div>
          </div>
          <div className='col-md-9'>
            <div className='row'>
              <div className='col-md-12'>
                <FreddyInfoList />
              </div>
              <div className='col-md-12'>
                <FreddyInfos />
              </div>
              <div className='col-md-12'>
                <FreddyImg />
              </div>
              <div className='col-md-12'>
                <FreddyDetail />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='col-md-12'>
                <FreddyAbout />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <FreddyPropertyHighlight />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <FreddyPopularFacilities />
              </div>
              <div className='col-md-12'>
                <FreddyAvailability />
              </div>
              <div className='col-md-12'>
                <FreddyAccommodationType />
              </div>
              <div className='col-md-12'>
                <FreddyCreditCard />
              </div>
              <div className='col-md-12'>
                <FreddyUpComingStay />
              </div>
              <div className='col-md-12'>
                <FreddyAreaInfo />
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-11'>
                <FreddyNearbyPlace />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-11'>
                <FreddyTopAttractions />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-11'>
                <FreddyClosestAirport />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <FreddyFacility />
              </div>
              <div className='col-md-12'>
                <FreddyPopularFacilities />
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <FreddyFacilities1 />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <FreddyFacilities2 />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <FreddyFacilities3 />
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <FreddyHouseRules />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Freddy
