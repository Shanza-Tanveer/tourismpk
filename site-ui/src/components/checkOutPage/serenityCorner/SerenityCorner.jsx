import React from 'react'
import SearchFilter from '../../listingPage/SearchFilter'
import SerenityAbout from './serenityAbout'
import SerenityAccommodationType from './serenityAccommodationType'
import SerenityAreaInfo from './serenityAreaInfo'
import SerenityAvailability from './serenityAvailability'
import SerenityClosestAirport from './serenityClosestAirport'
import SerenityCreditCard from './serenityCreditCard'
import SerenityDetail from './serenityDetail'
import SerenityFacilities1 from './serenityFacilities1'
import SerenityFacilities2 from './serenityFacilities2'
import SerenityFacilities3 from './serenityFacilities3'
import SerenityFacility from './serenityFacility'
import SerenityHouseRules from './serenityHouseRules'
import SerenityImg from './serenityImg'
import SerenityInfoList from './serenityInfoList'
import SerenityInfos from './serenityInfos'
import SerenityNearbyPlace from './serenityNearbyPlace'
import SerenityPopularFacilities from './serenitypopularFacilities'
import SerenityPriceMatch from './serenitypriceMatch'
import SerenityPropertyHighlight from './serenityPropertyHighlight'
import SerenityTopAttractions from './serenityTopAttractions'
import SerenityUpComingStay from './serenityUpComingStay'

const SerenityCorner = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='row'>
              <div className='col-md-12'>
                <SerenityPriceMatch />
              </div>
              <div className='col-md-12'>
                <SearchFilter />
              </div>
            </div>
          </div>
          <div className='col-md-9'>
            <div className='row'>
              <div className='col-md-12'>
                <SerenityInfoList />
              </div>
              <div className='col-md-12'>
                <SerenityInfos />
              </div>
              <div className='col-md-12'>
                <SerenityImg />
              </div>
              <div className='col-md-12'>
                <SerenityDetail />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='col-md-12'>
                <SerenityAbout />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <SerenityPropertyHighlight />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <SerenityPopularFacilities />
              </div>
              <div className='col-md-12'>
                <SerenityAvailability />
              </div>
              <div className='col-md-12'>
                <SerenityAccommodationType />
              </div>
              <div className='col-md-12'>
                <SerenityCreditCard />
              </div>
              <div className='col-md-12'>
                <SerenityUpComingStay />
              </div>
              <div className='col-md-12'>
                <SerenityAreaInfo />
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-11'>
                <SerenityNearbyPlace />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-11'>
                <SerenityTopAttractions />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-11'>
                <SerenityClosestAirport />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <SerenityFacility />
              </div>
              <div className='col-md-12'>
                <SerenityPopularFacilities />
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <SerenityFacilities1 />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <SerenityFacilities2 />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <SerenityFacilities3 />
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <SerenityHouseRules />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SerenityCorner
