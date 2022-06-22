import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Check } from '@material-ui/icons'
import '../upscalePeaceful/availability.css'

const IkeaServicedAvailability = () => {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  return (
    <>
      <div className='main_availability'>
        <div className='availability_box'>
          <div>
            <h1>Availability</h1>
          </div>
          <div className='col-sm-2'>
            <NavLink to=''>
              <Check className='checked_icons' />
              <p>We Price Match</p>
            </NavLink>
          </div>
        </div>
        <div className='checkAvailability_box'>
          <div className='checkAvailability_box_p'>
            <p>When would you like to stay at Ikea Serviced Apartments?</p>
          </div>
          <div className='calenders'>
            <div className='calender_icon'>
              <label For='check-in date'>Check-in Date</label>
              <DatePicker
                placeholderText='Check-in Date'
                dateFormat='MMMM d, yyyy'
                selected={startDate}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                onChange={(date) => setStartDate(date)}
                className=' form-control datepicker_inputs'
              />
            </div>
            <div>
              <label For='check-in date'>Check-out Date</label>
              <DatePicker
                placeholderText='Check-out Date'
                dateFormat='MMMM d, yyyy'
                selected={endDate}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                onChange={(date) => setEndDate(date)}
                className='form-control datepicker_inputs'
              />
            </div>
            <button className='btn'>Check Availability</button>
          </div>
          <div className='requirement'>
            <div>
              <label for='rooms'>Rooms</label>
              <select name='rooms' id='rooms'>
                <option value='1'>0</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='1'>5</option>
                <option value='2'>6</option>
                <option value='3'>7</option>
                <option value='4'>8</option>
                <option value='1'>9</option>
                <option value='2'>10</option>
                <option value='3'>11</option>
                <option value='4'>12</option>
                <option value='1'>13</option>
                <option value='2'>14</option>
                <option value='3'>15</option>
                <option value='4'>16</option>
              </select>
            </div>
            <div className='adults_children'>
              <label for='adults'>Adults</label>
              <select name='adults' id='adults'>
                <option value='1'>0</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='1'>5</option>
                <option value='2'>6</option>
                <option value='3'>7</option>
                <option value='4'>8</option>
                <option value='1'>9</option>
                <option value='2'>10</option>
                <option value='3'>11</option>
                <option value='4'>12</option>
                <option value='1'>13</option>
                <option value='2'>14</option>
                <option value='3'>15</option>
                <option value='4'>16</option>
              </select>
            </div>
            <div className='adults_children'>
              <label for='chlidren'>Childrens</label>
              <select name='chlidren' id='chlidren'>
                <option value='1'>0</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='1'>5</option>
                <option value='2'>6</option>
                <option value='3'>7</option>
                <option value='4'>8</option>
                <option value='1'>9</option>
                <option value='2'>10</option>
                <option value='3'>11</option>
                <option value='4'>12</option>
                <option value='1'>13</option>
                <option value='2'>14</option>
                <option value='3'>15</option>
                <option value='4'>16</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IkeaServicedAvailability
