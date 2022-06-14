import React from 'react'
import { NavLink } from 'react-router-dom'
import { KingBedTwoTone, Person } from '@material-ui/icons'
import './accommodationType.css'

const AccommodationType = () => {
  return (
    <>
      <table className='accommodation_table'>
        <thead className='table_heading'>
          <tr>
            <th className='sleeps'>Sleeps</th>
            <th className='accommodation'>Accommodation Type</th>
            <th className='price'>Price</th>
          </tr>
        </thead>
        <tbody className='table_body'>
          <tr>
            <td>
              <Person className='max-adult_icon' />
              <div className='max_adults'>x 6</div>
            </td>
            <td className='accommodation_box'>
              <div className='accommodation_detail'>
                <div>
                  <NavLink to=''>
                    <h3>Penthouse Apartment</h3>
                  </NavLink>
                </div>
                <div className='living_rooms'>
                  <ul>
                    <li>
                      <h5>Bedroom 1:</h5>
                      <p>1 queen bed</p>
                      <KingBedTwoTone className='bed_icons' />
                    </li>
                    <li>
                      <h5>Bedroom 2:</h5>
                      <p>1 queen bed</p>
                      <KingBedTwoTone className='bed_icons' />
                    </li>
                    <li>
                      <h5>Living room:</h5>
                      <p>1 sofa bed</p>
                    </li>
                    <li>
                      <h5>Living room:</h5>
                      <p>1 sofa bed</p>
                    </li>
                  </ul>
                </div>
              </div>
            </td>
            <td>
              <button className='table_btn'>Show prices</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default AccommodationType
