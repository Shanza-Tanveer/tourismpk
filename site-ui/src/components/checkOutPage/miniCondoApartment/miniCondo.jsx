import React from 'react'
import SearchFilter from '../../listingPage/SearchFilter'
import MiniCondoAbout from './miniCondoAbout'
import MiniCondoAccommodationType from './miniCondoAccommodationType'
import MiniCondoAreaInfo from './miniCondoAreaInfo'
import MiniCondoAvailability from './miniCondoAvailability'
import MiniCondoClosestAirport from './miniCondoClosestAirport'
import MiniCondoCreditCard from './miniCondoCreditCard'
import MiniCondoDetail from './miniCondoDetail'
import MiniCondoFacilities1 from './miniCondoFacilities1'
import MiniCondoFacilities2 from './miniCondoFacilities2'
import MiniCondoFacilities3 from './miniCondoFacilities3'
import MiniCondoFacility from './miniCondoFacility'
import MiniCondoHouseRules from './miniCondoHouseRules'
import MiniCondoImg from './miniCondoImg'
import MiniCondoInfoList from './miniCondoInfoList'
import MiniCondoInfos from './miniCondoInfos'
import MiniCondoNearbyPlace from './miniCondoNearbyPlace'
import MiniCondoPopularFacilities from './miniCondoPopularFacilities'
import MiniCondoPriceMatch from './miniCondoPriceMatch'
import MiniCondoPropertyHighlight from './miniCondoPropertyHighlight'
import MiniCondoTopAttractions from './miniCondoTopAttractions'
import MiniCondoUpComingStay from './miniCondoUpComingStay'

const MiniCondo = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='row'>
              <div className='col-md-12'>
                <MiniCondoPriceMatch />
              </div>
              <div className='col-md-12'>
                <SearchFilter />
              </div>
            </div>
          </div>
          <div className='col-md-9'>
            <div className='row'>
              <div className='col-md-12'>
                <MiniCondoInfoList />
              </div>
              <div className='col-md-12'>
                <MiniCondoInfos />
              </div>
              <div className='col-md-12'>
                <MiniCondoImg />
              </div>
              <div className='col-md-12'>
                <MiniCondoDetail />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='col-md-12'>
                <MiniCondoAbout />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <MiniCondoPropertyHighlight />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <MiniCondoPopularFacilities />
              </div>
              <div className='col-md-12'>
                <MiniCondoAvailability />
              </div>
              <div className='col-md-12'>
                <MiniCondoAccommodationType />
              </div>
              <div className='col-md-12'>
                <MiniCondoCreditCard />
              </div>
              <div className='col-md-12'>
                <MiniCondoUpComingStay />
              </div>
              <div className='col-md-12'>
                <MiniCondoAreaInfo />
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-11'>
                <MiniCondoNearbyPlace />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-11'>
                <MiniCondoTopAttractions />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-11'>
                <MiniCondoClosestAirport />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <MiniCondoFacility />
              </div>
              <div className='col-md-12'>
                <MiniCondoPopularFacilities />
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <MiniCondoFacilities1 />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <MiniCondoFacilities2 />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <MiniCondoFacilities3 />
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <MiniCondoHouseRules />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MiniCondo
