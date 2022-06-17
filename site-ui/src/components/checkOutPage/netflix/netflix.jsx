import React from 'react'
import SearchFilter from '../../listingPage/SearchFilter'
import NetflixAbout from './netflixAbout'
import NetflixAccommodationType from './netflixAccommodationType'
import NetflixAreaInfo from './netflixAreaInfo'
import NetflixAvailability from './netflixAvailability'
import NetflixClosestAirport from './netflixClosestAirport'
import NetflixCreditCard from './netflixCreditCard'
import NetflixDetail from './netflixDetail'
import NetflixFacilities1 from './netflixFacilities1'
import NetflixFacilities2 from './netflixFacilities2'
import NetflixFacilities3 from './netflixFacilities3'
import NetflixFacility from './netflixFacility'
import NetflixHouseRules from './netflixHouseRules'
import NetflixImg from './netflixImg'
import NetflixInfoList from './netflixInfoList'
import NetflixInfos from './netflixInfos'
import NetflixNearbyPlace from './netflixNearbyPlace'
import NetflixPopularFacilities from './netflixPopularFacilities'
import NetflixPriceMatch from './netflixPriceMatch'
import NetflixPropertyHighlight from './netflixPropertyHighlight'
import NetflixTopAttractions from './netflixTopAttractions'
import NetflixUpComingStay from './netflixUpComingStay'

const Netflix = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='row'>
              <div className='col-md-12'>
                <NetflixPriceMatch />
              </div>
              <div className='col-md-12'>
                <SearchFilter />
              </div>
            </div>
          </div>
          <div className='col-md-9'>
            <div className='row'>
              <div className='col-md-12'>
                <NetflixInfoList />
              </div>
              <div className='col-md-12'>
                <NetflixInfos />
              </div>
              <div className='col-md-12'>
                <NetflixImg />
              </div>
              <div className='col-md-12'>
                <NetflixDetail />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='col-md-12'>
                <NetflixAbout />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <NetflixPropertyHighlight />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <NetflixPopularFacilities />
              </div>
              <div className='col-md-12'>
                <NetflixAvailability />
              </div>
              <div className='col-md-12'>
                <NetflixAccommodationType />
              </div>
              <div className='col-md-12'>
                <NetflixCreditCard />
              </div>
              <div className='col-md-12'>
                <NetflixUpComingStay />
              </div>
              <div className='col-md-12'>
                <NetflixAreaInfo />
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-11'>
                <NetflixNearbyPlace />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-11'>
                <NetflixTopAttractions />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-11'>
                <NetflixClosestAirport />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <NetflixFacility />
              </div>
              <div className='col-md-12'>
                <NetflixPopularFacilities />
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <NetflixFacilities1 />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <NetflixFacilities2 />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <NetflixFacilities3 />
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <NetflixHouseRules />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Netflix
