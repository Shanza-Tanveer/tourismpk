import React from 'react'
import BackgroundImage from './BackgroundImage'
import CitiesList from './CitiesList'
import CitiesList2 from './CitiesList2'
import DesitinationList3 from './DesitinationList3'
import DestinationList2 from './DestinationList2'
import DestinationLists from './DestinationLists'
import HomesList from './HomesList'
import PropertyLists from './PropertyLists'
import TravelersList from './TravelersList'

const Home = () => {
  return (
    <>
      {/* <BackgroundImage />
      <PropertyLists />
      <DestinationLists />
      <DestinationList2 />
      <DesitinationList3 />
      <CitiesList />
      <CitiesList2 />
      <HomesList />
      <TravelersList /> */}

      <BackgroundImage />
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-12'>
                <PropertyLists />
              </div>
              <div className='col-md-12'>
                <DestinationLists />
              </div>
              <div className='col-md-12'>
                <DestinationList2 />
              </div>
              <div className='col-md-12'>
                <DesitinationList3 />
              </div>
              <div className='col-md-12'>
                <CitiesList />
              </div>
              <div className='col-md-12'>
                <CitiesList2 />
              </div>
              <div className='col-md-12'>
                <HomesList />
              </div>
              <div className='col-md-12'>
                <TravelersList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
