import React from 'react'
import SearchFilter from '../../listingPage/SearchFilter'
import AtriumAbout from './atriumAbout'
import AtriumAccommodationType from './atriumAccommodationType'
import AtriumAreaInfo from './atriumAreaInfo'
import AtriumAvailability from './atriumAvailability'
import AtriumClosestAirport from './atriumClosestAirport'
import AtriumCreditCard from './atriumCreditCard'
import AtriumDetail from './atriumDetail'
import AtriumFacilities1 from './atriumFacilities1'
import AtriumFacilities2 from './atriumFacilities2'
import AtriumFacilities3 from './atriumFacilities3'
import AtriumFacility from './atriumFacility'
import AtriumHouseRules from './atriumHouseRules'
import AtriumImg from './atriumImg'
import AtriumInfoList from './atriumInfoList'
import AtriumInfos from './atriumInfos'
import AtriumNearbyPlace from './atriumNearbyPlace'
import AtriumPopularFacilities from './atriumPopularFacilities'
import AtriumPriceMatch from './atriumPriceMatch'
import AtriumPropertyHighlight from './atriumPropertyHighlight'
import AtriumTopAttractions from './atriumTopAttractions'
import AtriumUpComingStay from './atriumUpComingStay'

const Atrium = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='row'>
              <div className='col-md-12'>
                <AtriumPriceMatch />
              </div>
              <div className='col-md-12'>
                <SearchFilter />
              </div>
            </div>
          </div>
          <div className='col-md-9'>
            <div className='row'>
              <div className='col-md-12'>
                <AtriumInfoList />
              </div>
              <div className='col-md-12'>
                <AtriumInfos />
              </div>
              <div className='col-md-12'>
                <AtriumImg />
              </div>
              <div className='col-md-12'>
                <AtriumDetail />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='col-md-12'>
                <AtriumAbout />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <AtriumPropertyHighlight />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <AtriumPopularFacilities />
              </div>
              <div className='col-md-12'>
                <AtriumAvailability />
              </div>
              <div className='col-md-12'>
                <AtriumAccommodationType />
              </div>
              <div className='col-md-12'>
                <AtriumCreditCard />
              </div>
              <div className='col-md-12'>
                <AtriumUpComingStay />
              </div>
              <div className='col-md-12'>
                <AtriumAreaInfo />
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-11'>
                <AtriumNearbyPlace />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-11'>
                <AtriumTopAttractions />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-11'>
                <AtriumClosestAirport />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <AtriumFacility />
              </div>
              <div className='col-md-12'>
                <AtriumPopularFacilities />
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <AtriumFacilities1 />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <AtriumFacilities2 />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <AtriumFacilities3 />
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <AtriumHouseRules />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Atrium
