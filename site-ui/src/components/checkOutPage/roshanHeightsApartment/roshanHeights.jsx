import React from 'react'
import SearchFilter from '../../listingPage/SearchFilter'
import RoshanHeightsAbout from './roshanHeightsAbout'
import RoshanHeightsAccommodationType from './roshanHeightsAccommodationType'
import RoshanHeightsAreaInfo from './roshanHeightsAreaInfo'
import RoshanHeightsAvailability from './roshanHeightsAvailability'
import RoshanHeightsClosestAirport from './roshanHeightsClosestAirport'
import RoshanHeightsCreditCard from './roshanHeightsCreditCard'
import RoshanHeightsDetail from './roshanHeightsDetail'
import RoshanHeightsFacilities1 from './roshanHeightsFacilities1'
import RoshanHeightsFacilities2 from './roshanHeightsFacilities2'
import RoshanHeightsFacilities3 from './roshanHeightsFacilities3'
import RoshanHeightsFacility from './roshanHeightsFacility'
import RoshanHeightsHouseRules from './roshanHeightsHouseRules'
import RoshanHeightsImg from './roshanHeightsImg'
import RoshanHeightsInfoList from './roshanHeightsInfoList'
import RoshanHeightsInfos from './roshanHeightsInfos'
import RoshanHeightsNearbyPlace from './roshanHeightsNearbyPlace'
import RoshanHeightsPopularFacilities from './roshanHeightsPopularFacilities'
import RoshanHeightsPriceMatch from './roshanHeightsPriceMatch'
import RoshanHeightsPropertyHighlight from './roshanHeightsPropertyHighlight'
import RoshanHeightsTopAttractions from './roshanHeightsTopAttractions'
import RoshanHeightsUpComingStay from './roshanHeightsUpComingStay'

const RoshanHeights = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='row'>
              <div className='col-md-12'>
                <RoshanHeightsPriceMatch />
              </div>
              <div className='col-md-12'>
                <SearchFilter />
              </div>
            </div>
          </div>
          <div className='col-md-9'>
            <div className='row'>
              <div className='col-md-12'>
                <RoshanHeightsInfoList />
              </div>
              <div className='col-md-12'>
                <RoshanHeightsInfos />
              </div>
              <div className='col-md-12'>
                <RoshanHeightsImg />
              </div>
              <div className='col-md-12'>
                <RoshanHeightsDetail />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='col-md-12'>
                <RoshanHeightsAbout />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <RoshanHeightsPropertyHighlight />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <RoshanHeightsPopularFacilities />
              </div>
              <div className='col-md-12'>
                <RoshanHeightsAvailability />
              </div>
              <div className='col-md-12'>
                <RoshanHeightsAccommodationType />
              </div>
              <div className='col-md-12'>
                <RoshanHeightsCreditCard />
              </div>
              <div className='col-md-12'>
                <RoshanHeightsUpComingStay />
              </div>
              <div className='col-md-12'>
                <RoshanHeightsAreaInfo />
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-11'>
                <RoshanHeightsNearbyPlace />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-11'>
                <RoshanHeightsTopAttractions />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-11'>
                <RoshanHeightsClosestAirport />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <RoshanHeightsFacility />
              </div>
              <div className='col-md-12'>
                <RoshanHeightsPopularFacilities />
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <RoshanHeightsFacilities1 />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <RoshanHeightsFacilities2 />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <RoshanHeightsFacilities3 />
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <RoshanHeightsHouseRules />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RoshanHeights
