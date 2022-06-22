import React from 'react'
import SearchFilter from '../../listingPage/SearchFilter'
import PadspromoAbout from './padspromoAbout'
import PadspromoAccommodationType from './padspromoAccommodationType'
import PadspromoAreaInfo from './padspromoAreaInfo'
import PadspromoAvailability from './padspromoAvailability'
import PadspromoClosestAirport from './padspromoClosestAirport'
import PadspromoCreditCard from './padspromoCreditCard'
import PadspromoDetail from './padspromoDetail'
import PadspromoFacilities1 from './padspromoFacilities1'
import PadspromoFacilities2 from './padspromoFacilities2'
import PadspromoFacilities3 from './padspromoFacilities3'
import PadspromoFacility from './padspromoFacility'
import PadspromoHouseRules from './padspromoHouseRules'
import PadspromoImg from './padspromoImg'
import PadspromoInfoList from './padspromoInfoList'
import PadspromoInfos from './padspromoInfos'
import PadspromoNearbyPlace from './padspromoNearbyPlace'
import PadspromoPopularFacilities from './padspromoPopularFacilities'
import PadspromoPriceMatch from './padspromoPriceMatch'
import PadspromoPropertyHighlight from './padspromoPropertyHighlight'
import PadspromoTopAttractions from './padspromoTopAttractions'
import PadspromoUpComingStay from './padspromoUpComingStay'

const PadspromoLodge = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='row'>
              <div className='col-md-12'>
                <PadspromoPriceMatch />
              </div>
              <div className='col-md-12'>
                <SearchFilter />
              </div>
            </div>
          </div>
          <div className='col-md-9'>
            <div className='row'>
              <div className='col-md-12'>
                <PadspromoInfoList />
              </div>
              <div className='col-md-12'>
                <PadspromoInfos />
              </div>
              <div className='col-md-12'>
                <PadspromoImg />
              </div>
              <div className='col-md-12'>
                <PadspromoDetail />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='col-md-12'>
                <PadspromoAbout />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <PadspromoPropertyHighlight />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <PadspromoPopularFacilities />
              </div>
              <div className='col-md-12'>
                <PadspromoAvailability />
              </div>
              <div className='col-md-12'>
                <PadspromoAccommodationType />
              </div>
              <div className='col-md-12'>
                <PadspromoCreditCard />
              </div>
              <div className='col-md-12'>
                <PadspromoUpComingStay />
              </div>
              <div className='col-md-12'>
                <PadspromoAreaInfo />
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-11'>
                <PadspromoNearbyPlace />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-11'>
                <PadspromoTopAttractions />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-11'>
                <PadspromoClosestAirport />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <PadspromoFacility />
              </div>
              <div className='col-md-12'>
                <PadspromoPopularFacilities />
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <PadspromoFacilities1 />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <PadspromoFacilities2 />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <PadspromoFacilities3 />
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <PadspromoHouseRules />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PadspromoLodge
