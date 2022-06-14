import React from 'react'
import IslamabadListing from './IslamabadListing'
import LahoreListing from './LahoreListing'
import SearchFilter from './SearchFilter'
import SideFilter from './SideFilter'

const Property = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-3 mt-5'>
            <div className='row mt-5'>
              <div className='col-sm-12 mt-5'>
                <SearchFilter />
              </div>
              <div className='col-sm-12'>
                <SideFilter />
              </div>
            </div>
          </div>
          <div className='col-sm-9'>
            <IslamabadListing />
          </div>
        </div>
      </div>
    </>
  )
}

export default Property
