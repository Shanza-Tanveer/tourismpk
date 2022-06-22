import React from 'react'
import SearchFilter from '../../listingPage/SearchFilter'
import IkeaServicedAbout from './ikeaServicedAbout'
import IkeaServicedAccommodationType from './ikeaServicedAccommodationType'
import IkeaServicedAreaInfo from './ikeaServicedAreaInfo'
import IkeaServicedAvailability from './ikeaServicedAvailability'
import IkeaServicedClosestAirport from './ikeaServicedClosestAirport'
import IkeaServicedCreditCard from './ikeaServicedCreditCard'
import IkeaServicedDetail from './ikeaServicedDetail'
import IkeaServicedFacilities1 from './ikeaServicedFacilities1'
import IkeaServicedFacilities2 from './ikeaServicedFacilities2'
import IkeaServicedFacility from './ikeaServicedFacility'
import IkeaServicedHouseRules from './ikeaServicedHouseRules'
import IkeaServicedImg from './ikeaServicedImg'
import IkeaServicedInfoList from './ikeaServicedInfoList'
import IkeaServicedInfos from './IkeaServicedInfos'
import IkeaServicedNearbyPlace from './IkeaServicedNearbyPlace'
import IkeaServicedPopularFacilities from './ikeaServicedPopularFacilities'
import IkeaServicedPriceMatch from './ikeaServicedPriceMatch'
import IkeaServicedPropertyHighlight from './ikeaServicedPropertyHighlight'
import IkeaServicedTopAttractions from './ikeaServicedTopAttractions'
import IkeaServicedUpComingStay from './ikeaServicedUpComingStay'
import IkeaServicedFacilities3 from './ikeaServiceFacilities3'

const IkeaServiced = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='row'>
              <div className='col-md-12'>
                <IkeaServicedPriceMatch />
              </div>
              <div className='col-md-12'>
                <SearchFilter />
              </div>
            </div>
          </div>
          <div className='col-md-9'>
            <div className='row'>
              <div className='col-md-12'>
                <IkeaServicedInfoList />
              </div>
              <div className='col-md-12'>
                <IkeaServicedInfos />
              </div>
              <div className='col-md-12'>
                <IkeaServicedImg />
              </div>
              <div className='col-md-12'>
                <IkeaServicedDetail />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='col-md-12'>
                <IkeaServicedAbout />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <IkeaServicedPropertyHighlight />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <IkeaServicedPopularFacilities />
              </div>
              <div className='col-md-12'>
                <IkeaServicedAvailability />
              </div>
              <div className='col-md-12'>
                <IkeaServicedAccommodationType />
              </div>
              <div className='col-md-12'>
                <IkeaServicedCreditCard />
              </div>
              <div className='col-md-12'>
                <IkeaServicedUpComingStay />
              </div>
              <div className='col-md-12'>
                <IkeaServicedAreaInfo />
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-11'>
                <IkeaServicedNearbyPlace />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-11'>
                <IkeaServicedTopAttractions />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-11'>
                <IkeaServicedClosestAirport />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <IkeaServicedFacility />
              </div>
              <div className='col-md-12'>
                <IkeaServicedPopularFacilities />
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <IkeaServicedFacilities1 />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <IkeaServicedFacilities2 />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <IkeaServicedFacilities3 />
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <IkeaServicedHouseRules />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IkeaServiced
