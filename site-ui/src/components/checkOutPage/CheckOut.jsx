import React from 'react'
import SearchFilter from '../listingPage/SearchFilter'
import AccommodationType from './accommodationType'
import ApartmentAbout from './apartmentAbout'
import ApartmentDetail from './apartmentDetail'
import ApartmentImg from './apartmentImg'
import ApartmentInfoList from './apartmentInfoList'
import ApartmentInfos from './apartmentInfos'
import Availability from './availability'
import CreditCard from './creditCard'
import PopularFacilities from './popularFacilities'
import PriceMatch from './priceMatch'
import PropertyHighlight from './propertyHighlight'
import UpComingStay from './upComingStay'
import NearbyPlace from './nearbyPlace'
import TopAttractions from './topAttractions'
import ClosestAirport from './closestAirport'
import AreaInfo from './areaInfo'
import ApartmentFacility from './apartmentFacility'
import ApartmentFacilities1 from './apartmentFacilities1'
import ApartmentFacilities2 from './apartmentFacilities2'
import ApartmentFacilities3 from './apartmentFacilities3'

const CheckOut = () => {
  return (
    <>
      {/* <ApartmentInfoList />
      <ApartmentInfos />
      <ApartmentImg />
      <PriceMatch />
      <SearchFilter /> */}

      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='row'>
              <div className='col-md-12'>
                <PriceMatch />
              </div>
              <div className='col-md-12'>
                <SearchFilter />
              </div>
            </div>
          </div>
          <div className='col-md-9'>
            <div className='row'>
              <div className='col-md-12'>
                <ApartmentInfoList />
              </div>
              <div className='col-md-12'>
                <ApartmentInfos />
              </div>
              <div className='col-md-12'>
                <ApartmentImg />
              </div>
              <div className='col-md-12'>
                <ApartmentDetail />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='col-md-12'>
                <ApartmentAbout />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <PropertyHighlight />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <PopularFacilities />
              </div>
              <div className='col-md-12'>
                <Availability />
              </div>
              <div className='col-md-12'>
                <AccommodationType />
              </div>
              <div className='col-md-12'>
                <CreditCard />
              </div>
              <div className='col-md-12'>
                <UpComingStay />
              </div>
              <div className='col-md-12'>
                <AreaInfo />
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-11'>
                <NearbyPlace />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-11'>
                <TopAttractions />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-11'>
                <ClosestAirport />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <ApartmentFacility />
              </div>
              <div className='col-md-12'>
                <PopularFacilities />
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <ApartmentFacilities1 />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <ApartmentFacilities2 />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-md-12'>
                <ApartmentFacilities3 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckOut
