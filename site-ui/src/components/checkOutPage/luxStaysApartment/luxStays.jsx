import React from 'react'
import SearchFilter from '../../listingPage/SearchFilter'
import LuxStaysAbout from './luxStaysAbout'
import LuxStaysAccommodationType from './luxStaysAccommodationType'
import LuxStaysAreaInfo from './luxStaysAreaInfo'
import LuxStaysAvailability from './luxStaysAvailability'
import LuxStaysClosestAirport from './luxStaysClosestAirport'
import LuxStaysCreditCard from './luxStaysCreditCard'
import LuxStaysDetail from './luxStaysDetail'
import LuxStaysFacilities1 from './luxStaysFacilities1'
import LuxStaysFacilities2 from './luxStaysFacilities2'
import LuxStaysFacilities3 from './luxStaysFacilities3'
import LuxStaysFacility from './luxStaysFacility'
import LuxStaysHouseRules from './luxStaysHouseRules'
import LuxStaysImg from './luxStaysImg'
import LuxStaysInfoList from './luxStaysInfoList'
import LuxStaysInfos from './luxStaysInfos'
import LuxStaysNearbyPlace from './luxStaysNearbyPlace'
import LuxStaysPopularFacilities from './luxStaysPopularFacilities'
import LuxStaysPriceMatch from './luxStaysPriceMatch'
import LuxStaysPropertyHighlight from './luxStaysPropertyHighlight'
import LuxStaysTopAttractions from './luxStaysTopAttractions'
import LuxStaysUpComingStay from './luxStaysUpComingStay'

const LuxStays = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='row'>
              <div className='col-md-12'>
                <LuxStaysPriceMatch />
              </div>
              <div className='col-md-12'>
                <SearchFilter />
              </div>
            </div>
          </div>
          <div className='col-md-9'>
            <div className='row'>
              <div className='col-md-12'>
                <LuxStaysInfoList />
              </div>
              <div className='col-md-12'>
                <LuxStaysInfos />
              </div>
              <div className='col-md-12'>
                <LuxStaysImg />
              </div>
              <div className='col-md-12'>
                <LuxStaysDetail />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='col-md-12'>
                <LuxStaysAbout />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <LuxStaysPropertyHighlight />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <LuxStaysPopularFacilities />
              </div>
              <div className='col-md-12'>
                <LuxStaysAvailability />
              </div>
              <div className='col-md-12'>
                <LuxStaysAccommodationType />
              </div>
              <div className='col-md-12'>
                <LuxStaysCreditCard />
              </div>
              <div className='col-md-12'>
                <LuxStaysUpComingStay />
              </div>
              <div className='col-md-12'>
                <LuxStaysAreaInfo />
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-11'>
                <LuxStaysNearbyPlace />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-11'>
                <LuxStaysTopAttractions />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-11'>
                <LuxStaysClosestAirport />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <LuxStaysFacility />
              </div>
              <div className='col-md-12'>
                <LuxStaysPopularFacilities />
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <LuxStaysFacilities1 />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <LuxStaysFacilities2 />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <LuxStaysFacilities3 />
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <LuxStaysHouseRules />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LuxStays
