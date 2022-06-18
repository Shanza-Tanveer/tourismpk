import React from 'react'
import SearchFilter from '../../listingPage/SearchFilter'
import ResidentialAbout from './residentialAbout'
import ResidentialAccommodationType from './residentialAccommodationType'
import ResidentialAreaInfo from './residentialAreaInfo'
import ResidentialAvailability from './residentialAvailability'
import ResidentialClosestAirport from './residentialClosestAirport'
import ResidentialCreditCard from './residentialCreditCard'
import ResidentialDetail from './residentialDetail'
import ResidentialFacilities1 from './residentialFacilities1'
import ResidentialFacilities2 from './residentialFacilities2'
import ResidentialFacilities3 from './residentialFacilities3'
import ResidentialFacility from './residentialFacility'
import ResidentialHouseRules from './residentialHouseRules'
import ResidentialImg from './residentialImg'
import ResidentialInfoList from './residentialInfoList'
import ResidentialInfos from './residentialInfos'
import ResidentialNearbyPlace from './residentialNearbyPlace'
import ResidentialPopularFacilities from './residentialPopularFacilities'
import ResidentialPriceMatch from './residentialPriceMatch'
import ResidentialPropertyHighlight from './residentialPropertyHighlight'
import ResidentialTopAttractions from './residentialTopAttractions'
import ResidentialUpComingStay from './residentialUpComingStay'

const Residential = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='row'>
              <div className='col-md-12'>
                <ResidentialPriceMatch />
              </div>
              <div className='col-md-12'>
                <SearchFilter />
              </div>
            </div>
          </div>
          <div className='col-md-9'>
            <div className='row'>
              <div className='col-md-12'>
                <ResidentialInfoList />
              </div>
              <div className='col-md-12'>
                <ResidentialInfos />
              </div>
              <div className='col-md-12'>
                <ResidentialImg />
              </div>
              <div className='col-md-12'>
                <ResidentialDetail />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='col-md-12'>
                <ResidentialAbout />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <ResidentialPropertyHighlight />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <ResidentialPopularFacilities />
              </div>
              <div className='col-md-12'>
                <ResidentialAvailability />
              </div>
              <div className='col-md-12'>
                <ResidentialAccommodationType />
              </div>
              <div className='col-md-12'>
                <ResidentialCreditCard />
              </div>
              <div className='col-md-12'>
                <ResidentialUpComingStay />
              </div>
              <div className='col-md-12'>
                <ResidentialAreaInfo />
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-11'>
                <ResidentialNearbyPlace />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-11'>
                <ResidentialTopAttractions />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-11'>
                <ResidentialClosestAirport />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <ResidentialFacility />
              </div>
              <div className='col-md-12'>
                <ResidentialPopularFacilities />
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <ResidentialFacilities1 />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <ResidentialFacilities2 />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <ResidentialFacilities3 />
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <ResidentialHouseRules />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Residential
