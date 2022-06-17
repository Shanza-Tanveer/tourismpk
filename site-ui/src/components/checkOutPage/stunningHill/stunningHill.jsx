import React from 'react'
import SearchFilter from '../../listingPage/SearchFilter'
import StunningAbout from './stunningAbout'
import StunningAccommodationType from './stunningAccommodationType'
import StunningAreaInfo from './stunningAreaInfo'
import StunningAvailability from './stunningAvailability'
import StunningClosestAirport from './stunningClosestAirport'
import StunningCreditCard from './stunningCreditCard'
import StunningDetail from './stunningDetail'
import StunningFacilities1 from './stunningFacilities1'
import StunningFacilities2 from './stunningFacilities2'
import StunningFacilities3 from './stunningFacilities3'
import StunningFacility from './stunningFacility'
import StunningHouseRules from './stunningHouseRules'
import StunningImg from './stunningImg'
import StunningInfoList from './stunningInfoList'
import StunningInfos from './stunningInfos'
import StunningNearbyPlace from './stunningNearbyPlace'
import StunningPopularFacilities from './stunningPopularFacilities'
import StunningPriceMatch from './stunningPriceMatch'
import StunningPropertyHighlight from './stunningPropertyHighlight'
import StunningTopAttractions from './stunningTopAttractions'
import StunningUpComingStay from './stunningUpComingStay'

const StunningHill = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='row'>
              <div className='col-md-12'>
                <StunningPriceMatch />
              </div>
              <div className='col-md-12'>
                <SearchFilter />
              </div>
            </div>
          </div>
          <div className='col-md-9'>
            <div className='row'>
              <div className='col-md-12'>
                <StunningInfoList />
              </div>
              <div className='col-md-12'>
                <StunningInfos />
              </div>
              <div className='col-md-12'>
                <StunningImg />
              </div>
              <div className='col-md-12'>
                <StunningDetail />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='col-md-12'>
                <StunningAbout />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <StunningPropertyHighlight />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <StunningPopularFacilities />
              </div>
              <div className='col-md-12'>
                <StunningAvailability />
              </div>
              <div className='col-md-12'>
                <StunningAccommodationType />
              </div>
              <div className='col-md-12'>
                <StunningCreditCard />
              </div>
              <div className='col-md-12'>
                <StunningUpComingStay />
              </div>
              <div className='col-md-12'>
                <StunningAreaInfo />
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-11'>
                <StunningNearbyPlace />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-11'>
                <StunningTopAttractions />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-11'>
                <StunningClosestAirport />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <StunningFacility />
              </div>
              <div className='col-md-12'>
                <StunningPopularFacilities />
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <StunningFacilities1 />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <StunningFacilities2 />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <StunningFacilities3 />
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <StunningHouseRules />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StunningHill
