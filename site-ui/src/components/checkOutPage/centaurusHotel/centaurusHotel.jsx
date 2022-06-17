import React from 'react'
import SearchFilter from '../../listingPage/SearchFilter'
import CentaurusAbout from './centaurusAbout'
import CentaurusAccommodationType from './centaurusAccommodationType'
import CentaurusAreaInfo from './centaurusAreaInfo'
import CentaurusAvailability from './centaurusAvailability'
import CentaurusClosestAirport from './centaurusClosestAirport'
import CentaurusCreditCard from './centaurusCreditCard'
import CentaurusDetail from './centaurusDetail'
import CentaurusFacilities1 from './centaurusFacilities1'
import CentaurusFacilities2 from './centaurusFacilities2'
import CentaurusFacilities3 from './centaurusFacilities3'
import CentaurusFacility from './centaurusFacility'
import CentaurusHouseRules from './centaurusHouseRules'
import CentaurusImg from './centaurusImg'
import CentaurusInfoList from './centaurusInfoList'
import CentaurusInfos from './centaurusInfos'
import CentaurusSerenityNearbyPlace from './centaurusNearbyPlace'
import CentaurusPopularFacilities from './centaurusPopularFacilities'
import CentaurusPriceMatch from './centaurusPriceMatch'
import CentaurusPropertyHighlight from './centaurusPropertyHighlight'
import CentaurusTopAttractions from './centaurusTopAttractions'
import CentaurusUpComingStay from './centaurusUpComingStay'

const CentaurusHotel = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='row'>
              <div className='col-md-12'>
                <CentaurusPriceMatch />
              </div>
              <div className='col-md-12'>
                <SearchFilter />
              </div>
            </div>
          </div>
          <div className='col-md-9'>
            <div className='row'>
              <div className='col-md-12'>
                <CentaurusInfoList />
              </div>
              <div className='col-md-12'>
                <CentaurusInfos />
              </div>
              <div className='col-md-12'>
                <CentaurusImg />
              </div>
              <div className='col-md-12'>
                <CentaurusDetail />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='col-md-12'>
                <CentaurusAbout />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <CentaurusPropertyHighlight />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <CentaurusPopularFacilities />
              </div>
              <div className='col-md-12'>
                <CentaurusAvailability />
              </div>
              <div className='col-md-12'>
                <CentaurusAccommodationType />
              </div>
              <div className='col-md-12'>
                <CentaurusCreditCard />
              </div>
              <div className='col-md-12'>
                <CentaurusUpComingStay />
              </div>
              <div className='col-md-12'>
                <CentaurusAreaInfo />
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-11'>
                <CentaurusSerenityNearbyPlace />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-11'>
                <CentaurusTopAttractions />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-11'>
                <CentaurusClosestAirport />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <CentaurusFacility />
              </div>
              <div className='col-md-12'>
                <CentaurusPopularFacilities />
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <CentaurusFacilities1 />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <CentaurusFacilities2 />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <CentaurusFacilities3 />
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <CentaurusHouseRules />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CentaurusHotel
