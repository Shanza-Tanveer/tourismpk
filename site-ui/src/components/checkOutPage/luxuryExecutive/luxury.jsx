import React from 'react'
import SearchFilter from '../../listingPage/SearchFilter'
import LuxuryAbout from './luxuryAbout'
import LuxuryAccommodationType from './luxuryAccommodationType'
import LuxuryAreaInfo from './luxuryAreaInfo'
import LuxuryAvailability from './luxuryAvailability'
import LuxuryClosestAirport from './luxuryClosestAirport'
import LuxuryCreditCard from './luxuryCreditCard'
import LuxuryDetail from './luxuryDetail'
import LuxuryFacilities1 from './luxuryFacilities1'
import LuxuryFacilities2 from './luxuryFacilities2'
import LuxuryFacilities3 from './luxuryFacilities3'
import LuxuryFacility from './luxuryFacility'
import LuxuryHouseRules from './luxuryHouseRules'
import LuxuryImg from './luxuryImg'
import LuxuryInfoList from './luxuryInfoList'
import LuxuryInfos from './luxuryInfos'
import LuxuryNearbyPlace from './luxuryNearbyPlace'
import LuxuryPopularFacilities from './luxuryPopularFacilities'
import LuxuryPriceMatch from './luxuryPriceMatch'
import LuxuryPropertyHighlight from './luxuryPropertyHighlight'
import LuxuryTopAttractions from './luxuryTopAttractions'
import LuxuryUpComingStay from './luxuryUpComingStay'

const Luxury = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='row'>
              <div className='col-md-12'>
                <LuxuryPriceMatch />
              </div>
              <div className='col-md-12'>
                <SearchFilter />
              </div>
            </div>
          </div>
          <div className='col-md-9'>
            <div className='row'>
              <div className='col-md-12'>
                <LuxuryInfoList />
              </div>
              <div className='col-md-12'>
                <LuxuryInfos />
              </div>
              <div className='col-md-12'>
                <LuxuryImg />
              </div>
              <div className='col-md-12'>
                <LuxuryDetail />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='col-md-12'>
                <LuxuryAbout />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <LuxuryPropertyHighlight />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <LuxuryPopularFacilities />
              </div>
              <div className='col-md-12'>
                <LuxuryAvailability />
              </div>
              <div className='col-md-12'>
                <LuxuryAccommodationType />
              </div>
              <div className='col-md-12'>
                <LuxuryCreditCard />
              </div>
              <div className='col-md-12'>
                <LuxuryUpComingStay />
              </div>
              <div className='col-md-12'>
                <LuxuryAreaInfo />
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-11'>
                <LuxuryNearbyPlace />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-11'>
                <LuxuryTopAttractions />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-11'>
                <LuxuryClosestAirport />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <LuxuryFacility />
              </div>
              <div className='col-md-12'>
                <LuxuryPopularFacilities />
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <LuxuryFacilities1 />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <LuxuryFacilities2 />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <LuxuryFacilities3 />
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <LuxuryHouseRules />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Luxury
